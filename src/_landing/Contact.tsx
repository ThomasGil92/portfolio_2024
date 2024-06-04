import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Contact = () => {
  const MAX_FILE_SIZE = 10000000;
  const ACCEPTED_FILES_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "application/msword",
    "application/vnd.oasis.opendocument.text",
    "application/pdf",
    "application/vnd.ms-powerpoint",
  ];
  const formSchema = z.object({
    firstName: z.string().min(1, {
      message: "Vous devez renseigner votre prénom",
    }),
    lastName: z
      .string()
      .min(1, { message: "Vous devez renseigner votre nom de famille" }),
    phone: z.string().min(10).max(14).optional(),
    email: z.string().email(),
    description: z
      .string()
      .min(50, { message: "Vous devez ajouter plus de détails" })
      .optional(),
    files: z
      .instanceof(FileList)
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Maximum 10MB.`)
      .refine(
        (files) => ACCEPTED_FILES_TYPES.includes(files?.[0]?.type),
        ".jpg, .jpeg, .png, .webp, .pdf, .ppt, .odt et .doc sont accéptés.",
      )
      .optional(),
    corpo_name: z.string().optional(),
    budget: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: undefined,
      email: "",
      description: undefined,
      files: undefined,
      corpo_name: undefined,
      budget: undefined,
    },
  });
  const fileRef = form.register("files");

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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

  const formComponent = () => {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-10 flex flex-col flex-wrap justify-between gap-10 md:flex-row">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hidden>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Prénom*" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hidden>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom*" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col flex-wrap justify-between gap-10 md:flex-col">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hidden>Numéro de Téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="Numéro de téléphone" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hidden>Adresse email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Adresse email*"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mt-10 text-left">
                  <FormLabel className="text-lg text-secondary">
                    Description de votre projet
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* //Todo: Mettre un style sur l'input file */}
          <div>
            <FormField
              control={form.control}
              name="files"
              render={() => (
                <FormItem className="mt-10 text-left">
                  <FormLabel className="text-lg text-secondary">
                    Fichiers à envoyer
                  </FormLabel>
                  <FormControl>
                    <Input type="file" placeholder="Description" {...fileRef} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10 flex flex-col flex-wrap justify-between gap-10 md:flex-row md:items-end">
            <FormField
              control={form.control}
              name="corpo_name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hidden>Nom de l'entreprise</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom de l'entreprise" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-secondary">Budget</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={100000}
                      placeholder="Montant en €"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="mt-10 w-full py-5 text-2xl font-semibold"
            variant={"secondary"}
          >
            Envoyer
          </Button>
        </form>
      </Form>
    );
  };

  return (
    <div className="flex w-full flex-col bg-primary md:flex-row md:divide-x-2">
      <div className="mx-auto w-11/12 text-center md:w-7/12 md:px-14 md:py-16">
        <h2 className="text-6xl font-bold text-secondary">Demandez un devis</h2>
        <div className="border-2 border-secondary p-4 md:mt-24 md:p-14">
          {formComponent()}
        </div>
      </div>
      <div className="mx-auto w-11/12 text-center md:w-5/12 md:px-14 md:py-16">
        <h2 className="mt-20 text-6xl font-bold text-secondary md:mt-0">
          Réserver un RDV
        </h2>
        <div className="mt-14 md:mt-24">
          <Cal
            calLink="thomas-gil/entretien"
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
