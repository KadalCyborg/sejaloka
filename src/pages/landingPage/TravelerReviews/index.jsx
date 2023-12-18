import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../configs/firebase';


const TravelerReviews = () => {
  const  [review, setReview] = useState([])

  const getTempatWisataCollection = async () => {
    let tempatWisata = []
    let tempatWisataRef = await collection(db, "travelerReview")
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
      setReview(res)
    })
    .catch((err) => console.error(err))
  })
  return (
    <section id='Traveler-Reviews' className='bg-white'>
      <div className='flex flex-wrap min-h-full items-center justify-center bg-white py-8 '>
        <div className='mx-auto flex w-full text-center flex-col gap-6 '>
          <h1 className='font-poppins text-3xl font-semibold text-amber-400 mb-10'>
            Travelerer Reviews
          </h1>
        </div>
        <div className='grid min-[400px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {review.map((e) => (
            <div
              className='card w-96 bg-amber-600 shadow-xl'
              key={e.firestoreId}
              data-aos='fade-up'
              data-aos-delay={e.id * 100}
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-anchor-placement='top-center'
            >
              <figure>
                <img src={e.url} alt='' />
              </figure>
              <div className='card-body text-white'>
                <h2 className='card-title justify-center mb-4'>{e.name}</h2>
                <p className='text-center'>{e.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelerReviews;
