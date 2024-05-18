"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { z } from 'zod'

const formSchema = z.object({
    cpf: z.string().length(11, "Preencha o cpf corretamente")
})

const Page = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {cpf: ''}
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        router.push('/order')
    }

    return(
        <div className="container w-full h-full flex justify-center items-center flex-col text-white gap-4">
            <h2 className="text-2xl">Bem-Vindo!</h2>
            <h1 className="text-3xl">Pegue sua comanda</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-64">
                    <FormField
                        control={form.control}
                        name="cpf"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CPF</FormLabel>
                                <FormControl>
                                    <Input
                                        autoFocus
                                        placeholder="Apenas números"
                                        {...field}
                                        className="text-black"
                                    />
                                </FormControl>
                                <FormMessage />
        
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Próximo</Button>
                </form>
            </Form>
        </div>
    )
}

export default Page