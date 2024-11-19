"use client"

import { useForm } from "react-hook-form";
import { DataTable } from "../_components/ui/data-table";
import { pointColumns } from "./_columns";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../_components/ui/form";
import { Button } from "../_components/ui/button";
import { CalendarIcon, Search } from "lucide-react";

import { Calendar } from "../_components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../_components/ui/popover";
import { cn } from "../_lib/utils";
import { format } from "date-fns";

const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
})

const ControleDePonto = () => {
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }
    return ( 
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-4 my-8">
                    <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Começando em:</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Terminando em:</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        </FormItem>
                    )}
                    />
                    <Button className="font-bold text-white">
                        <Search />
                    </Button>
                    <Button variant="outline" className="font-bold text-white">Esconder dias de descanços</Button>
                </form>
            </Form>
            
            <DataTable columns={pointColumns} data={[]}/>
        </>
    );
}
 
export default ControleDePonto;