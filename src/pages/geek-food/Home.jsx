import ReviewCard from "../../components/geek-food/ReviewCard"

function Home() {
     const { origin } = location
     const APP_NAME = "/geek-food"
     return (
          <>

               <div className="h-100vh-68 relative">
                    <img src={`${origin}/images/${APP_NAME}/banner.jpeg`} alt="Banner" className="w-full h-full object-cover" />
                    <div className="overlay w-full h-full bg-black/[0.4] absolute inset-x-0 inset-y-0 flex items-center justify-center z-10">
                         <div className="max-w-7xl w-full mx-auto">
                              <div className="max-w-2xl px-4 py-3">
                                   <div className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-snug tracking-wide mb-3">
                                        <div>Let us find your</div>
                                        <div className="text-red-600">Forever Food.</div>
                                   </div>
                                   <div className="text-white font-medium text-lg md:text-xl mb-3">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                                   </div>
                                   <div className="flex items-center gap-4">
                                        <button className="px-7 py-3 rounded text-white bg-red-600 hover:bg-red-700">Search Now</button>
                                        <button className="px-7 py-3 rounded bg-white text-red-600">Know More</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="about-section px-10 py-16 grid md:grid-cols-2">
                    <div className="md:py-10 lg:py-12 xl:py-16">
                         <img src={`${origin}/images/${APP_NAME}/home.jpeg`} alt="Home" className="h-full object-cover" />
                    </div>
                    <div className="bg-slate-200 flex items-center relative">
                         <div className="absolute h-full bg-slate-200 inset-y-0 w-20 right-full -z-10 hidden md:block"></div>
                         <div className="w-full px-10 py-8">
                              <div className="text-2xl lg:text-3xl font-bold mb-3">
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                              </div>
                              <div className="text-sm md:text-base text-slate-600 mb-3">
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                              </div>
                              <button className="px-7 py-3 rounded border-2 border-indigo-600 text-white hover:text-indigo-600 bg-indigo-600 hover:bg-white focus:ring-2">Get In Touch</button>
                         </div>
                    </div>
               </div>

               <div className="review-grid max-w-7xl mx-auto px-4 py-6">
                    <div className="sm:columns-2 md:columns-3">
                         <ReviewCard image={`${origin}/images/${APP_NAME}/profile.jpeg`} name="Gladis Lenon" designation="Head of SEO" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." />
                         <ReviewCard image={`${origin}/images/${APP_NAME}/profile.jpeg`} name="Gladis Lenon" designation="Head of SEO" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
                         <ReviewCard image={`${origin}/images/${APP_NAME}/profile.jpeg`} name="Gladis Lenon" designation="Head of SEO" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." />
                         <ReviewCard image={`${origin}/images/${APP_NAME}/profile.jpeg`} name="Gladis Lenon" designation="Head of SEO" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
                         <ReviewCard image={`${origin}/images/${APP_NAME}/profile.jpeg`} name="Gladis Lenon" designation="Head of SEO" review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." />
                         <ReviewCard image={`${origin}/images/${APP_NAME}/profile.jpeg`} name="Gladis Lenon" designation="Head of SEO" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.Fs" />
                    </div>
               </div>

          </>
     )
}

export default Home
