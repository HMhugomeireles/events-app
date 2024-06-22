import { Separator } from "@/components/ui/separator";
import { TypographyH4 } from "@/components/ui/typography";

import Image from "next/image";

export default function Login() {
    return(
        <main className="flex min-h-screen flex-col my-4">
            <section className="flex justify-center items-center mb-4">
                <Image
                alt="logo fo CAP"
                src="/logo-bg-remove.png"
                width={40}
                height={80}
                />
                <TypographyH4>Clube Airsoft Porto</TypographyH4>
            </section>

            <Separator />

            <section className="p-4">
                a
            </section>

        </main>
    )
}