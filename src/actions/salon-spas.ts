'use server'
import supabase from "@/config/supabase-config";

export const createNewSalonSpa = async (payload: any) => {
    try {
        const { data, error } = await supabase.from('salon_spas').insert(payload)
        if(error) throw error
        return {
            success : true,
            message : 'Le Salon a été crée avec succès'
        }
    } catch (error: any) {
        return {
            success : false,
            message : error.message
        }
    }
}

export const getSalonsByOwner = async (owner_id: string) => {
    try {
       const {data, error} = await supabase.from('salons_spas').select('*').eq('owner_id', owner_id) 
       if(error) throw error
       return {
        success : true,
        data : data
       }
    } catch (error:any) {
        return {
            success : false,
            message : error.message
        }
    }
}

export const getSalonSpaById = async (salon_id: string) => {
    try {
        const {data, error} = await supabase.from('salons_spas').select('*').eq('id', salon_id)
        if(error || data.length === 0) throw error || new Error("Le Salon n'a pas été trouvé")
        return {
            success : true,
            data : data[0]
        }
    } catch (error:any) {
        return {
            success : false,
            message : error.message
        }
    }
}

export const editSalonSpaById = async ({id, payload} : {
    payload : any,
    id : number,
}) => {
    try {
        const {data, error} = await supabase.from('salons_spas').update(payload).eq('id', id)
        if(error) throw error
        return {
            success : true,
            message : 'Salon mis à jour'
        }
    } catch (error: any) {
        return {
            success : false,
            message : error.message
        }
    }
}

export const deleteSalonSpaById = async (salon_id: string) => {
    try {
        const {data, error} = await supabase.from('salons_spas').delete().eq('id', salon_id)
        if(error) throw error
        return {
            success : true,
            message : 'Salon supprimé avec succès',
        }
    } catch (error: any) {
        return {
            success : false,
            message : error.message
        }
    }
}

