'use server'

import supabase from "@/config/supabase-config";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const registerNewUser = async ({ name, email, password, role }: {
    name: string,
    email: string,
    password: string,
    role: string
}) => {
    try {

        // Vérifier si un utilisateur utilise déjà ce mail
        const { data, error } = await supabase.from('user_profiles').select('email').eq('email', email)
        if (data && data.length > 0) {
            return {
                success: false,
                message: 'Un autre utilisateur utilise déjà cette addresse mail'
            }
        }

        // hasher le mot de passe
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUserObj = {
            name,
            email,
            password: hashedPassword,
            role,
            is_active: true,
        }

        // Ajouter le nouvel utilisateur dans la base de donnée
        const { data: userData, error: userError } = await supabase
            .from("user_profiles")
            .insert([newUserObj]);

        if (userError) {
            return {
                success: false,
                message: userError.message,
            };
        }

        return {
            success: true,
            message: "L'utilisateur a bien été ajouté",
        };

    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}

export const loginUser = async ({ email, password, role }: { email: string; password: string; role: string }) => {
    try {

        // Rechercher l'utilisateur grâce à son addresse mail
        const { data, error } = await supabase.from("user_profiles").select("*").eq("email", email);
        if (error) {
            return {
                success: false,
                message: error.message,
            };
        }

        if (data.length === 0) {
            return {
                success: false,
                message: "Utilisateur non trouvé",
            };
        }

        if (data[0].role !== role) {
            return {
                success: false,
                message: "Rôle invalide",
            };
        }

        // Vérifier le passport en les comparant
        const isPasswordValid = bcrypt.compareSync(password, data[0].password);
        if (!isPasswordValid) {
            return {
                success: false,
                message: "Mot de passe invalide",
            };
        }

        // Générer un JWT Token
        const token = jwt.sign(
            { id: data[0].id }, process.env.JWT_SECRET!, {
            expiresIn: "1d",
        });

        return {
            success: true,
            data: token,
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
        };
    }
};

export const getCurrentUser = async (token: string) => {
    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        const userId = decoded.id;

        const { data, error } = await supabase.from("user_profiles").select("*").eq("id", userId);
        if (!data || data?.length === 0 || error) {
            return {
                success: false,
                message: "Utilisateur non trouvé",
            };
        }

        return {
            success: true,
            data: data[0],
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
        }
    }
}