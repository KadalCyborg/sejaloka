import { MainLayout } from '../../component/Layouts';
import Navbar from '../../component/Navbar';
import Header from '../../component/Header/Index';
import Footer from '../../component/Footer';
import Logofb from '../../assets/image/logofb.png';
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../configs/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Reviews = [
  {
    src: Logofb,
    title: 'Dicoding',
    desc: 'Lokasi Strategis, Lengkap Dan Detail Akan Penjelasan Tiap Peninggalan Bersejarahnya',
  },
  {
    src: Logofb,
    title: 'Dicoding',
    desc: 'Lokasi Strategis, Lengkap Dan Detail Akan Penjelasan Tiap Peninggalan Bersejarahnya',
  },
  {
    src: Logofb,
    title: 'Dicoding',
    desc: 'Lokasi Strategis, Lengkap Dan Detail Akan Penjelasan Tiap Peninggalan Bersejarahnya',
  },
];

const DetailPage = () => {
  const [ placeData, setPlace ] = useState([])
  const { id } = useParams()
  const fetchPlaceDetails = async () => {
    const match = id.match(/:id (.+)/);
    const museumName = match ? match[1] : null;
    console.log(museumName);
    const placeRef = await doc(db, "Informasi-Wisata", museumName);
    const placeDoc = await getDoc(placeRef);

    if (placeDoc.exists()) {
      const place = placeDoc.data();
      return place;
    } else {
      console.log('Document does not exist');
      return null; // or handle the case where the document doesn't exist
    }
  }
  
  useEffect(() => {
    fetchPlaceDetails()
    .then((res) => {
      setPlace(res)
    })
    .catch((err) => console.error(err))
  })

  return (
    <>
      <MainLayout>
        <Navbar />
        <Header image={placeData?.url} />

        <div className='bg-white'>
          <div className='items-center justify-center flex'>
            <div className='w-11/12 flex flex-col mt-5 sm:flex-row'>
              <div className='text-black w-full sm:w-1/3 mb-5 sm:mb-0'>
                <table>
                  <thead>
                    <tr>
                      <td className='font-bold'>Jam Kunjungan</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Senin-Kamis</td>
                      <td>:</td>
                      <td>08.00-16.00</td>
                    </tr>
                    <tr>
                      <td>Sabtu-Minggu</td>
                      <td>:</td>
                      <td>08.00-14.00</td>
                    </tr>
                    <tr>
                      <td>Jum&rsquo;at Dan Libur Nasional</td>
                      <td>:</td>
                      <td>Tutup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='text-black w-full sm:w-1/3 mb-5 sm:mb-0'>
                <table>
                  <thead>
                    <tr>
                      <td className='font-bold'>Harga Tiket Masuk</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pelajar/Mahasiswa</td>
                      <td>:</td>
                      <td>Rp 2.000</td>
                    </tr>
                    <tr>
                      <td>Umum</td>
                      <td>:</td>
                      <td>Rp 3.000</td>
                    </tr>
                    <tr>
                      <td>Asing/Pelajar Asing</td>
                      <td>:</td>
                      <td>Rp 10.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='w-full sm:w-1/3 text-black flex items-center justify-center'>
                <button className='rounded-2xl bg-amber-400 p-5 hover:bg-black hover:text-white transition-colors duration-300'>
                  Tambahkan Ke To Go List
                </button>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center text-black'>
            <div className='w-11/12'>
              <h2 className='font-semibold text-3xl text-amber-400 my-16'>
                Tentang Museum Geologi Bandung
              </h2>
              <p>{placeData.url}</p>
            </div>
          </div>
          <div className='flex items-center justify-center text-black'>
            <div className='w-3/5 flex justify-between'>
              <div>
                <h2 className='font-semibold text-3xl my-20'>
                  Traveler Reviews
                </h2>
              </div>
              <div className='flex items-center justify-center'>
                <button className='rounded-2xl bg-amber-400 p-4 hover:bg-black hover:text-white transition-colors duration-300'>
                  Tulis Ulasanmu
                </button>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center pb-10'>
            <div className='w-3/5'>
              <div className='flex flex-col gap-5'>
                {Reviews.map((item, index) => (
                  <div
                    className='bg-amber-400 w-full h-auto rounded-xl flex flex-col md:flex-row p-5 gap-4 justify-center items-center'
                    key={index}
                    data-aos='fade-right'
                    data-aos-delay={index * 100}
                    data-aos-duration='500'
                    data-aos-easing='ease-in-out'
                    data-aos-mirror='true'
                    data-aos-once='false'
                    data-aos-anchor-placement='top-center'
                  >
                    <img
                      className='object-cover w-20 h-20'
                      src={item.src}
                      alt=''
                    />
                    <div className='flex flex-col w-full gap-2'>
                      <h1 className='text-white font-poppins'>{item.title}</h1>
                      <p className='text-black font-poppins'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </MainLayout>
    </>
  );
};

export default DetailPage;
