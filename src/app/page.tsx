import Image from "next/image";
import { Button } from '@/components/ui/button'
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyLead, TypographyP } from "@/components/ui/typography";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
      <section className="flex justify-between items-center mb-4 m-4">
        <div className="flex items-center">
          <Image
            alt="logo fo CAP"
            src="/logo-bg-remove.png"
            width={60}
            height={80}
          />
          <div className="flex flex-col">
            <TypographyH1>CAP</TypographyH1>
            <TypographyP><div className="-mt-8">Clube Airsoft Porto</div></TypographyP>
          </div>
        </div>

        <nav>
          {false ? 
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>PY</AvatarFallback>
                    </Avatar>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Link href="/profile">Profile</Link>
                    </MenubarItem>
                    <MenubarItem>
                      <Link href="/dashboard">Admin area</Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem><Link href="/logout">Logout</Link></MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>  
            :
              <Link href="/login"><Button>Login</Button></Link>
          }
        </nav>
      </section>
      <Separator />

      <section className="m-4">
        <div className="mb-4">
          <TypographyH3>Upcoming Event</TypographyH3>
        </div>
        <Card>
          <div className="m-2">
            <Image
              width={200}
              height={100}
              className="w-full max-h-36 rounded-lg"
              src="/event-card-img.jpg"
              alt="image event"
            />
          </div>
          <CardHeader>
            <CardTitle>Sunday game</CardTitle>
            <CardDescription>26 May 2024 - Maia, Porto, Portugal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full flex justify-between">
              <div className="flex">
                <p className="mr-2">Contractors: </p>
                <p>0/<span className="text-xs">100</span></p>
              </div>  
              <div className="flex">
                <p className="mr-2">Camuflados: </p>
                <p>0/<span className="text-xs">100</span></p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href="/event-detail">
              <Button>View Details</Button>
            </Link>      
          </CardFooter>
        </Card>
      </section>

      <section className="mt-16 m-4">
        <Table>
          <TableCaption>A list of last game events.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Event</TableHead>
              <TableHead>Nº Players</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Sunday Game #33</TableCell>
              <TableCell>100</TableCell>
              <TableCell>19/05/2024</TableCell>
              <TableCell className="text-right"><Badge variant="secondary">Finish</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Sunday Game #33</TableCell>
              <TableCell>100</TableCell>
              <TableCell>19/05/2024</TableCell>
              <TableCell className="text-right"><Badge variant="secondary">Finish</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Sunday Game #33</TableCell>
              <TableCell>100</TableCell>
              <TableCell>19/05/2024</TableCell>
              <TableCell className="text-right"><Badge variant="secondary">Finish</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

    </main>
  );
}