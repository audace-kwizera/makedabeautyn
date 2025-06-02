'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { workingDays } from '@/constant';
import { Checkbox } from '@/components/ui/checkbox';
import toast from 'react-hot-toast';

interface SalonFormProps {
  initialValues?: any
  formType?: 'add' | 'edit'
}

const offerStatuses = [
  { value: 'active', label: "Actif" },
  { value: 'inactive', label: "Inactif" },
]


const SalonSpaForm = ({ initialValues, formType }: SalonFormProps) => {

  const formSchema = z.object({
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    address: z.string().nonempty(),
    city: z.string().nonempty(),
    state: z.string().nonempty(),
    zip: z.string().nonempty(),
    working_days: z.array(z.string().nonempty()),
    start_time: z.string().nonempty(),
    end_time: z.string().nonempty(),
    break_start_time: z.string().nonempty(),
    break_end_time: z.string().nonempty(),
    minimum_service_price: z.number(),
    maximum_service_price: z.number(),
    offer_status: z.string().nonempty(),
    slot_duration: z.number(),
    max_bookings_per_slot: z.number(),
    location_name: z.string(),
    latitue: z.string(),
    longitude: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      working_days: [],
      start_time: "",
      end_time: "",
      break_start_time: "",
      break_end_time: "",
      minimum_service_price: 0,
      maximum_service_price: 0,
      offer_status: "inactive",
      slot_duration: 0,
      max_bookings_per_slot: 0,
      location_name: "",
      latitue: "",
      longitude: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  const onWorkingDayChange = (day: string) => {
    try {
      const prevValues = form.getValues("working_days");
      if (prevValues.includes(day)) {
        form.setValue("working_days", prevValues.filter((d) => d !== day));
      } else {
        form.setValue("working_days", [...prevValues, day]);
      }
    } catch (error:any) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='container__form container__form__login container'>
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem
                className='container__form__input container__form__input__login container'>
                <FormLabel
                  className='form__input__label form__input__label__login container'>Nom</FormLabel>
                <FormControl>
                  <Input
                    className='form__input__field form__input__field__login container'
                    placeholder="Entrez le nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem
                className='container__form__input container__form__input__login container'>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} className='form__input__label form__input__label__login container' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Addresse */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem
                className='container__form__input container__form__input__login container'>
                <FormLabel
                  className='form__input__label form__input__label__login container'>Adresse</FormLabel>
                <FormControl>
                  <Input
                    className='form__input__field form__input__field__login container'
                    placeholder="Entrez l'adresse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Ville */}
          <div>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Ville</FormLabel>
                  <FormControl>
                    <Input
                      className='form__input__field form__input__field__login container'
                      placeholder="Entrez la ville" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Code Postal */}
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Code Postal</FormLabel>
                  <FormControl>
                    <Input
                      className='form__input__field form__input__field__login container'
                      placeholder="Entrez le code postal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Prix Minimal */}
            <FormField
              control={form.control}
              name="minimum_service_price"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Prix Minimal</FormLabel>
                  <FormControl>
                    <Input
                      className='form__input__field form__input__field__login container'
                      type='number'
                      placeholder="" 
                      {...field}
                      onChange={(e) => {
                        form.setValue('minimum_service_price', parseInt(e.target.value)
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Prix Maximal */}
            <FormField
              control={form.control}
              name="maximum_service_price"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Prix Maximal</FormLabel>
                  <FormControl>
                    <Input
                      className='form__input__field form__input__field__login container'
                      type='number'
                      placeholder="" {...field}
                      onChange={(e) => {
                        form.setValue(
                          `maximum_service_price`,
                          parseInt(e.target.value)
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {/* Active */}
            <FormField
              control={form.control}
              name="offer_status"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'
                >
                  <FormLabel
                    className='form__input__label form__input__label__login container'
                  >
                    Status de l'offre
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Selectionner le status de l'offre"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {offerStatuses.map((status) => (
                        <SelectItem
                          key={status.value}
                          value={status.value}
                        >
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Jours Travaillés */}
          <div>
            <h1>
              Jour Travaillés
            </h1>

            <div>
              {workingDays.map((day) => {

                const prevValues = form.watch("working_days");
                const isChecked = prevValues.includes(day.value)

                return (
                  <div key={day.value}>
                    <span>{day.label}</span>
                    <Checkbox
                      onCheckedChange={() => onWorkingDayChange(day.value)}
                      checked={isChecked}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Heures d'ouvertures */}
          <div>
            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Heure d'ouverture</FormLabel>
                  <FormControl>
                    <Input
                      type='time'
                      className='form__input__field form__input__field__login container'
                      placeholder="Heure d'ouverture" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Heures de fermeture */}
          <div>
            <FormField
              control={form.control}
              name="end_time"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Heure de fermeture</FormLabel>
                  <FormControl>
                    <Input
                      type='time'
                      className='form__input__field form__input__field__login container'
                      placeholder="Heure d'ouverture" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Heures de début de pause */}
          <div>
            <FormField
              control={form.control}
              name="break_start_time"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Heure de début de Pause</FormLabel>
                  <FormControl>
                    <Input
                      type='time'
                      className='form__input__field form__input__field__login container'
                      placeholder="Heure de début de pause" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Heures d'arrêt de pause */}
          <div>
            <FormField
              control={form.control}
              name="break_end_time"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Heure de fin de Pause</FormLabel>
                  <FormControl>
                    <Input
                      type='time'
                      className='form__input__field form__input__field__login container'
                      placeholder="Heure de fin de pause" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Slot Duration */}
          <div>
            <FormField
              control={form.control}
              name="slot_duration"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Slot Duration</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      className='form__input__field form__input__field__login container'
                      placeholder="Slot Duration" {...field}
                      onChange={(e) => {
                        form.setValue("slot_duration", parseInt(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Max Slot Duration */}
          <div>
            <FormField
              control={form.control}
              name="max_bookings_per_slot"
              render={({ field }) => (
                <FormItem
                  className='container__form__input container__form__input__login container'>
                  <FormLabel
                    className='form__input__label form__input__label__login container'>Max Slot Duration</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      className='form__input__field form__input__field__login container'
                      placeholder="" {...field}
                      onChange={(e) => {
                        form.setValue("max_bookings_per_slot", parseInt(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* <div>
            <h1>
              Location
            </h1>
          </div> */}

          <div>
            <Button
              type='button'
              variant={"outline"}
            >
              Cancel
            </Button>
            <Button
              type="submit"
            >
              {formType === "add" ? "Ajouter" : "Mettre à jour"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SalonSpaForm