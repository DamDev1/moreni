import React from 'react'

export default function Clients() {
  return (
    <section className='bg-[#FFFFFF] px-[4rem] py-[10rem] max-[900px]:px-[2rem] max-[900px]:mt-0 '>
      <div className='grid grid-cols-2 max-[900px]:grid-cols-1 max-[900px]:gap-[5rem]'>
        <div>
          <h1 className='text-black'>Expertise</h1>
          <div className='grid gap-10'>
            <h1 className='text-black font-dmSerifText service-text'>
              I have had the <br /> privilege of <br /> working with <br /> these incredible <br /> brands.
            </h1>
          </div>
        </div>
        <div className='grid gap-10 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1'>
          <p className='text-black/50 font-poppins text-lg' style={{
            lineHeight: 2
          }}>Quibusdam quis autem voluptatibus earum vel ex error ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit debitis quam dignissimos veritatis atque pariatur magnam obcaecati fugit reprehenderit vel numquam facere esse est deserunt, perferendis commodi voluptatem similique.</p>
          <p className='text-black/50 font-poppins text-lg' style={{
            lineHeight: 2
          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam molestiae vel quaerat quas facilis voluptates rerum aspernatur quam voluptatem ea, vitae illo, omnis minus vero minima maiores quia nihil incidunt provident debitis ab qui quasi. Iure unde numquam in nulla praesentium nesciunt dolore exercitationem, odit expedita minima quisquam ullam ex. Aut perferendis vel consectetur modi esse. Temporibus reprehenderit alias magni atque repellat aspernatur voluptates, accusantium pariatur libero ad nesciunt illum labore facere. Earum iure consequatur cumque omnis maiores optio.</p>
        </div>
      </div>
      <div className='mt-[5rem] grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-10'>
        <div className='grid gap-10'>
          <p className='text-black/50 font-poppins text-md ' style={{
            lineHeight: 2
          }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odio autem consequuntur consectetur amet numquam nobis quo iusto, inventore tenetur, praesentium porro eos ea! Quo rem cumque minus temporibus iusto?</p>
          <div className='flex items-center gap-4 '>
            <div className='w-15 h-15 rounded-full overflow-hidden'>
              <img src="https://s7d2.scene7.com/is/image/TWCNews/Guy_Brown_NY1_Smiling_1920x1080_HS" className='w-15 h-15 object-cover' alt="" />
            </div>
            <div className='grid gap-1'>
              <h2 className='text-black/60 font-semibold font-poppins'>Samuel Damilare</h2>
              <p className='text-black/60 font-medium text-sm font-poppins'>Standerd Oil Company</p>
            </div>
          </div>
        </div>

        <div className='grid gap-10'>
          <p className='text-black/50 font-poppins text-md ' style={{
            lineHeight: 2
          }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odio autem consequuntur consectetur amet numquam nobis quo iusto, inventore tenetur, praesentium porro eos ea! Quo rem cumque minus temporibus iusto?</p>
          <div className='flex items-center gap-4 '>
            <div className='w-15 h-15 rounded-full overflow-hidden'>
              <img src="https://www.artshub.com.au/wp-content/uploads/sites/2/2025/05/Guy-Sebastian-1043x743-1.webp" className='w-15 h-15 object-cover' alt="" />
            </div>
            <div className='grid gap-1'>
              <h2 className='text-black/60 font-semibold font-poppins'>Samuel Damilare</h2>
              <p className='text-black/60 font-medium text-sm font-poppins'>Standerd Oil Company</p>
            </div>
          </div>
        </div>

        <div className='grid gap-10'>
          <p className='text-black/50 font-poppins text-md ' style={{
            lineHeight: 2
          }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odio autem consequuntur consectetur amet numquam nobis quo iusto, inventore tenetur, praesentium porro eos ea! Quo rem cumque minus temporibus iusto?</p>
          <div className='flex items-center gap-4 '>
            <div className='w-15 h-15 rounded-full overflow-hidden'>
              <img src="https://media.themusic.com.au/images/standard/Artists/G/guy-sebastian/guy-sebastian-h-0919.990x660.jpg" className='w-15 h-15 object-cover' alt="" />
            </div>
            <div className='grid gap-1'>
              <h2 className='text-black/60 font-semibold font-poppins'>Samuel Damilare</h2>
              <p className='text-black/60 font-medium text-sm font-poppins'>Standerd Oil Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
