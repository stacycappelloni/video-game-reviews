import {createClient} from "@supabase/supabase-js"

export default async function request(req, res){
    const supabaseUrl = 'https://gybpbyypeygdldyhsyft.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    let { data, error } = await supabase.from('reviews').select('*')

    //send the data back as a result if everything goes as expected 
    res.status(200).json(data)
}