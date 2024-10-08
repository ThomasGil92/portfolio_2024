/* eslint-disable @typescript-eslint/no-unused-vars */

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import axios from 'axios'

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import Cal,{ getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
//import ContactEmail from "../../emails/Contact";

 const Contact = () => {
//   const MAX_FILE_SIZE = 10000000;
//   const ACCEPTED_FILES_TYPES = [
//     "image/jpeg",
//     "image/jpg",
//     "image/png",
//     "image/webp",
//     "application/msword",
//     "application/vnd.oasis.opendocument.text",
//     "application/pdf",
//     "application/vnd.ms-powerpoint",
//   ];

  // const formSchema = z.object({
  //   firstName: z.string().min(1, {
  //     message: "Vous devez renseigner votre prénom",
  //   }),
  //   lastName: z
  //     .string()
  //     .min(1, { message: "Vous devez renseigner votre nom de famille" }),
  //   phone: z.string().min(10).max(14).optional(),
  //   email: z.string().email(),
  //   description: z
  //     .string()
  //     .min(50, { message: "Vous devez ajouter plus de détails" })
  //     .optional(),
  //   files: z
  //     .instanceof(FileList)
  //     .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Maximum 10MB.`)
  //     .refine(
  //       (files) => ACCEPTED_FILES_TYPES.includes(files?.[0]?.type),
  //       ".jpg, .jpeg, .png, .webp, .pdf, .ppt, .odt et .doc sont accéptés.",
  //     )
  //     .optional(),
  //   corpo_name: z.string().optional(),
  //   budget: z.string().optional(),
  // });

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     firstName: "",
  //     lastName: "",
  //     phone: undefined,
  //     email: "",
  //     description: undefined,
  //     files: undefined,
  //     corpo_name: undefined,
  //     budget: undefined,
  //   },
  // });
  // const fileRef = form.register("files");

  // const convertFileToBase64 = (
  //   file: Blob,
  // ): Promise<string | ArrayBuffer | null> => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = reject;
  //     reader.readAsDataURL(file);
  //   });
  // };

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   if (values.files && values.files[0]) {
  //     try {
  //       let base64File: string | ArrayBuffer | null = null;
  //       base64File = await convertFileToBase64(values.files[0]);

  //       await axios.post("/api/getData",{body:JSON.stringify({values,base64File})});
  //     } catch (error) {
  //       console.log("Error converting file to base64", error);
  //       return;
  //     }
  //   }

    /* try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        values,
        { publicKey: "user_4OCMAoXXWlSfnD7fgLVEP" },
      );
    } catch (error) {
      console.log(error);
    } */
 // };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#5e88dd" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // const formComponent = () => {
  //   return (
  //     <Form {...form}>
  //       <form id="contactForm" onSubmit={form.handleSubmit(onSubmit)}>
  //         <div className="mb-10 flex flex-col flex-wrap justify-between gap-10 md:flex-row">
  //           <FormField
  //             control={form.control}
  //             name="firstName"
  //             render={({ field }) => (
  //               <FormItem className="flex-1">
  //                 <FormLabel hidden>Prénom</FormLabel>
  //                 <FormControl>
  //                   <Input placeholder="Prénom*" {...field} />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="lastName"
  //             render={({ field }) => (
  //               <FormItem className="flex-1">
  //                 <FormLabel hidden>Nom</FormLabel>
  //                 <FormControl>
  //                   <Input placeholder="Nom*" {...field} />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //         <div className="flex flex-col flex-wrap justify-between gap-10 md:flex-col">
  //           <FormField
  //             control={form.control}
  //             name="phone"
  //             render={({ field }) => (
  //               <FormItem className="flex-1">
  //                 <FormLabel hidden>Numéro de Téléphone</FormLabel>
  //                 <FormControl>
  //                   <Input placeholder="Numéro de téléphone" {...field} />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="email"
  //             render={({ field }) => (
  //               <FormItem className="flex-1">
  //                 <FormLabel hidden>Adresse email</FormLabel>
  //                 <FormControl>
  //                   <Input
  //                     type="email"
  //                     placeholder="Adresse email*"
  //                     {...field}
  //                   />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //         <div>
  //           <FormField
  //             control={form.control}
  //             name="description"
  //             render={({ field }) => (
  //               <FormItem className="mt-10 text-left">
  //                 <FormLabel className="text-lg text-secondary">
  //                   Description de votre projet
  //                 </FormLabel>
  //                 <FormControl>
  //                   <Textarea placeholder="Description" {...field} />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //         {/* //Todo: Mettre un style sur l'input file */}
  //         <div>
  //           <FormField
  //             control={form.control}
  //             name="files"
  //             render={() => (
  //               <FormItem className="mt-10 text-left">
  //                 <FormLabel className="text-lg text-secondary">
  //                   Fichiers à envoyer
  //                 </FormLabel>
  //                 <FormControl>
  //                   <Input type="file" placeholder="Description" {...fileRef} />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //         <div className="mt-10 flex flex-col flex-wrap justify-between gap-10 md:flex-row md:items-end">
  //           <FormField
  //             control={form.control}
  //             name="corpo_name"
  //             render={({ field }) => (
  //               <FormItem className="flex-1">
  //                 <FormLabel hidden>Nom de l'entreprise</FormLabel>
  //                 <FormControl>
  //                   <Input placeholder="Nom de l'entreprise" {...field} />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="budget"
  //             render={({ field }) => (
  //               <FormItem className="flex-1">
  //                 <FormLabel className="text-secondary">Budget</FormLabel>

  //                 <FormControl>
  //                   <Input
  //                     {...field}
  //                     type="number"
  //                     min={0}
  //                     max={100000}
  //                     placeholder="Montant en €"
  //                   />
  //                 </FormControl>

  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //         <Button
  //           type="submit"
  //           className="mt-10 w-full py-5 text-2xl font-semibold"
  //           variant={"secondary"}
  //         >
  //           Envoyer
  //         </Button>
  //       </form>
  //     </Form>
  //   );
  // };

  return (
    <div id="contact" className="flex w-full flex-col bg-primary md:flex-row">
      {/* <div className="mx-auto w-11/12 pt-10 text-center md:mb-16 md:w-7/12 md:px-14 md:pt-0">
        <h2 className="text-6xl font-bold text-secondary">Demandez un devis</h2>
        <div className="p-4 md:p-14">{formComponent()}</div>
      </div> */}
      <div className="mx-auto mb-16 w-11/12 text-center md:mb-16 md:w-8/12 md:px-14">
        <h2 className="mt-20 text-6xl font-bold text-secondary ">
          Réserver un RDV
        </h2>
        <div className="mt-14">
          <Cal
            calLink="thomas-gil/entretien"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
