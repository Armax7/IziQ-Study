import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";
import { supabase } from "../api/supabaseClient";
import * as Chakra from "@chakra-ui/react";





const Decks = () => {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

   const [categories,setCategories] = useState([]); 
   const[allUserDecks,setAllUserDecks] = useState([]);

const [subCategories,setSubCategories] = useState([]);
const[allSubCategories,setAllSubCategories] = useState([]);






  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserId(userID);

    const decks = await SupaHelpers.get.userDecks();
    
    setDecks(decks);
    setAllUserDecks(decks);
  
    

    const { data: categories, error } = await supabase
   .from('categories')
   .select("id,name")
   if(error){
    console.log(error)
   }
    setCategories(categories)
    


    const { data: subCategories, err } = await supabase
    .from('subcategories')
    .select("id,name")
    if(error){
     console.log(error)
    }
    setSubCategories(subCategories)

 


  }, [userID]);







function filterDecks (e) { 
  
  setDecks(allUserDecks)
if(e.target.value) {
  
    let cambios = allUserDecks.filter(c => c.category_id == e.target.value)
    
  
    setDecks(cambios)



}
}


function filterSubCategories (e) { 
  
  setSubCategories(allSubCategories)

  
    let cambios = allSubCategories.filter(c => c.category_id == e.target.value)
    
  
    setSubCategories(cambios)
   


}






  return (
    
    <div>  
      <Chakra.Box bgColor="#4D455D"  borderRadius= "10px"  color= "#6c2eb9" bgImg="https://i.gifer.com/2GU.mp4"
  fontWeight= "normal"
  fontSize= "28px"
  fontFamily= "Arial"
  textTransform= "uppercase"
  textAlign="center"> 
      <h1> Filter your deck</h1> 
      <Components.Dropdown bg = "#F5E9CF" optionsC={[...categories]} optionsSub ={[...subCategories]} onChange={filterDecks} 
      color='#E96479' size = "lg" width="10%" onChangue2={filterSubCategories} 
        borderRadius= "10px"
    display= "inline-block"
    font= "inherit"
    lineHeight= "center"
    padding= "2em 0.1em 2em 1em"/>
    
    </Chakra.Box>
      <Components.DeckContainer decks={decks}  />
     
    </div>

  );
};

export default Decks;




