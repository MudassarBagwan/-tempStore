


 function About() {   


    return (
      <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        Msb
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          store
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
      Welcome to MSB Store, your go-to destination for the latest electronics 
      and fresh produce! We offer a curated selection of high-quality gadgets,
       from smartphones to accessories, all backed by expert advice and 
       exceptional service. Alongside our tech offerings, our fruit shop 
       features a vibrant array of locally sourced fruits and vegetables, 
       promoting healthy living and delicious eating. At MSB Store, 
       we’re dedicated to providing you with the perfect blend of innovation 
       and nature’s goodness. Visit us today to explore our unique combination 
       of products that cater to your lifestyle!
      </p>
    </section>
     
    );
  }
  
  export default About;



     // const profile= await db.testProfile.create({
   //    data:{
   //       name:'random name'
   //    }
   // })


   // const users= await db.testProfile.findMany();

   // {users.map((user)=>{
   //    return <h2 key={user.id} className='text-2xl font-bold'>{user.name}</h2>
   // })}