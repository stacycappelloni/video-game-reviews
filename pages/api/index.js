import {createClient} from "@supabase/supabase-js"

export default async function request(req, res){
    const supabaseUrl = 'https://gybpbyypeygdldyhsyft.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    if (req.method === "GET"){
        let { data, error } = await supabase.from('reviews').select('*')

        res.status(200).json(data)
    }
    else if (req.method === "POST"){
        const body = req.body 
   
        const { data, error } = await supabase
            .from('reviews')
            .insert([
            { title: body.title,
            num_stars: body.num_stars, 
            platform: body.platform, 
            comment: body.comment
            },
            ])

        res.status(200).json(data)

    } 

    let { data, error } = await supabase.from('reviews').select('*')

    //send the data back as a result if everything goes as expected 
    res.status(200).json(data)
}