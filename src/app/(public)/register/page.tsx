"use client";
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from 'next/link';
import toast from 'react-hot-toast';
import { registerNewUser } from '@/actions/users';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const formSchema = z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(2).max(50),
        role: z.enum(["user", "makeda-beauty"]),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "user",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            const response = await registerNewUser(values);
            if (response.success) {
                toast.success("Le compte a été crée avec succès");
                router.push("/login");
            } else {
                toast.error(response.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='auth-bg'>
            <div className='bg-white p-5 rounded-sm w-[500px]'>

                {/* Titre */}
                <h1 className='text-xl font-bold! text-gray-600'>
                    S'enregistrer
                </h1>

                <hr className='my-7 border-t border-gray-300' />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Entrez votre adresse mail" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Entrez votre adresse mail" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mot de passe</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Entrez votre mot de passe" type='password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Radio Button */}
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Je suis</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex space-x-20"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="user" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Client
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="makeda-beauty" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Prestataire
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Validation compte */}
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5 text-sm'>
                                J'ai déjà un compte
                                <Link href="/login" className='underline'>Se connecter</Link>
                            </div>
                            <Button type="submit"disabled={loading}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage