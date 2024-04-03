import styles from "./page.module.css";

const resposta = await fetch("https://back-end-ifms.vercel.app/campi" , {
   next: {
    revalidate: 1
   }
});

const campi = await resposta.json();

export default async function Home() {
const resposta = await fetch("http://localhost:3000/api",{
     next:{
       revalidate: 1
     }
});
const campi = await resposta.json();
  return (
    <main>
      <div style={{marginTop: "10%"}}>
      <h1>Home</h1>
      {
        campi.map( (campi) => 
        <div class = {styles.card}>
          <p>{campi.nome_campi}</p> 
        </div>
        )
      }
      </div>
    </main>
  )
}
