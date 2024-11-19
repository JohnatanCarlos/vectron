import Link from "next/link";
import Image from 'next/image';
import { Button } from "../_components/ui/button";
import { Separator } from "../_components/ui/separator";


const RegitrarPonto = () => {
    return (  
        <>
            <h1 className="font-bold text-3xl mb-4">Registrar ponto</h1>
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="flex flex-col justify-center items-center border rounded-md p-8 gap-4 bg-[#18181B]">
                   <h2 className="font-bold text-2xl">Click no botão ao lado para registrar o ponto</h2>
                   <Image src="/vetor-dedo-ponto.svg" alt="vetor dedo batendo o ponto" width={500} height={90}/>  
                </div>

                <div className="flex flex-col border rounded-md p-8 gap-4 bg-[#18181B]">
                    <div>
                       <p className="font-bold">Último registro</p>
                       <p className="text-muted-foreground">19/10/2024 as 09:00</p>
                       <Separator orientation="horizontal" className="my-4"/>
                    </div>
                    <div className="p-2 bg-primary-foreground">
                        <p className="font-bold">Localização</p>
                        <p className="text-muted-foreground">R. das Dalias, 129 - Piedade - Jaboatão dos Guararapes - PE, 54420-450, Brasil</p>
                    </div>
                    <div className="p-2 bg-primary-foreground text-indigo-600">
                        <Link href="#" className="underline">Utilizar localização do meu último registro</Link>
                        <p className="text-muted-foreground">R. das Dalias, 129 - Piedade - Jaboatão dos Guararapes - PE, 54420-450, Brasil</p>
                    </div>

                    <Button variant="outline">Editar Localização</Button>
                    <Button>Bater Ponto</Button>
                </div>
            </div>
        </>
    );
}
 
export default RegitrarPonto;