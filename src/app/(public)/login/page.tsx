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
import { loginUser } from '@/actions/users';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import Headernav from '@/layout-provider/header-nav';
import Footer from '@/layout-provider/footer';

const LoginPage = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(2).max(50),
        role: z.enum(["user", "salon-spa-owner"]),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            role: "user",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            const response: any = await loginUser(values);
            if (response.success) {
                toast.success("Connexion réussi");
                Cookies.set("token", response.data);
                Cookies.set("role", values.role);
                router.push(`/${values.role}/dashboard`);
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
        <div>

            {/* Header */}
            <Headernav></Headernav>

            <div>
                {/* Corps */}
                <div className='container__body__link'></div>
                {/* Titre */}
                <h1 className='form__title__login'>
                    Se connecter
                </h1>

                <hr />

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='container__form container__form__login container'>
                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem
                                    className='container__form__input container__form__input__login container'>
                                    <FormLabel
                                        className='form__input__label form__input__label__login container'>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='form__input__field form__input__field__login container'
                                            placeholder="Entrez votre adresse mail" {...field} />
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
                                <FormItem
                                    className='container__form__input container__form__input__login container'
                                >
                                    <FormLabel
                                        className='form__input__label form__input__label__login container'
                                    >Mot de passe</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='form__input__field form__input__field__login container'
                                            placeholder="Entrez votre mot de passe"
                                            type='password' {...field}
                                        />
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
                                <FormItem
                                    className='container__form__input container__form__input__login container'
                                >
                                    <FormLabel
                                    >Je suis</FormLabel>
                                    <FormControl

                                    >
                                        <RadioGroup
                                            className='container__form__input__radio container__form__input__radio__login container'
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormItem
                                                className='form__input__radio form__input__radio__login container'
                                            >
                                                <FormControl>
                                                    <RadioGroupItem value="user" />
                                                </FormControl>
                                                <FormLabel>
                                                    Client
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem
                                                className='form__input__radio form__input__radio__login container'
                                            >
                                                <FormControl>
                                                    <RadioGroupItem value="salon-spa-owner" />
                                                </FormControl>
                                                <FormLabel>
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
                        <div className='container__form__link'>
                            <div className='form__link__register'>
                                Je n'ai pas encore de compte
                                <Link href="/register" className='form__link__register__submit'>S'enregistrer</Link>
                            </div>
                            <div className='container__homecover__button'>
                                <Button
                                    disabled={loading}
                                    type="submit"
                                    className='container__homecover__button__primary'
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LoginPage