'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../_components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../_components/ui/form';
import { Input } from '../_components/ui/input';


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(1, {
        message: "password must be at least 2 characters.",
    })
})

type FormSchema = z.infer<typeof formSchema>;

const LoginPage = () => {
    
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })
    
    const onSubmit = (data: FormSchema) => {
        console.log(data)
    }

    return (  
        <div className="grid h-full grid-cols-2">
            <div className="flex flex-col items-center mx-auto min-w-[600px] justify-center p-8">
                <Image src="/vectron-logo.png" alt="logo da vectron sistema de ponto" width={190} height={96} className="mb-12"/>
                <h1 className="font-bold text-3xl pb-12">Acessar sua conta</h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Usuário</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" type="password" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        
                        <Link href="/forgot-password" className="text-muted-foreground underline">Esqueceu a senha?</Link>
                      
                        <Button type="submit" className="w-full">Entrar</Button>
                        <Button variant="outline" type="submit" className="w-full">Criar conta</Button>
                    </form>
                </Form>

            </div>
            <div className="relative h-full w-full">
                <Image src="/banner-login.jpg" alt="banner login" fill className="object-cover opacity-70"/>
            </div>
        </div>
    );
}
 
export default LoginPage;