import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../../configs/firebase";
import { useState } from "react";
import { useEffect } from "react";

const SectionDestinasi = () => {
  const  [destinasi, setDestinasi] = useState([])

  const getTempatWisataCollection = async () => {
    let tempatWisata = []
    let tempatWisataRef = await collection(db, "Informasi-Wisata")
    let result = await getDocs(tempatWisataRef)
    result.forEach((res) => {
      tempatWisata.push({
        firestoreId: res.id, 
        ...res.data(),
      });
    });
    return tempatWisata
  }

  useEffect(() => {
    getTempatWisataCollection()
    .then((res) => {
      setDestinasi(res)
    })
    .catch((err) => console.error(err))
  })

  return (
    <section id='Destinasi'>
      <div className='flex flex-wrap items-center justify-center bg-amber-400 py-10'>
        <div className='mx-auto flex w-full text-center flex-col gap-6 '>
          <h1 className='font-poppins text-2xl font-semibold sm-text-2xl text-white'>
            Destinasi Yang Luar Biasa
          </h1>
          <h2 className='text-center text-base font-sans-serif max-w-3xl self-center mb-7 text-black md:line-clamp-4'>
            Dengan masakannya yang unik dan menarik, kekayaan budayanya, beberapa pantai
            terindah di dunia, air terjun yang mempesona, dan petualangan yang
            disukai semua orang, yang perlu Anda lakukan hanyalah memilih jenis
            pariwisata yang tepat untuk Anda dan terkagum-kagum dengan keajaiban
            Indonesia.
          </h2>
        </div>

        <div className='grid min-[400px]:grid-cols-2 gap-y-1.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {destinasi.map((e) => (
            <div
            className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-sm'
            key={e.firestoreId}
            data-aos='fade-up'
            data-aos-delay={e.id * 100}
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            data-aos-anchor-placement='top-center'
          >
            <div className='h-50 w-52 px-2'>
              <img className='w-full object-cover' src={e.url} alt={e.url} />
            </div>
            <div className='absolute inset-0  bg-gradiant-to-b form-transparent via-transparent'>
              <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[100%] group-hover:translate-y-5 transition-all'>
                <button className='rounded-full bg-orange-800 py-2 px-3.5 text-sm capitalize text-white justify-beetwen'>
                  <Link to={`/detailpage/:id ${e.firestoreId}`}> See More </Link>
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionDestinasi;
