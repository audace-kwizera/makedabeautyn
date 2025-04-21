'use server'

import supabase from "@/config/supabase-config";
import bcrypt from 'bcryptjs';

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