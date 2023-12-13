import { MainLayout } from '../../component/Layouts';
import Navbar from '../../component/Navbar';
import Header from '../../component/Header/Index';
import Footer from '../../component/Footer';
import RuangSejarahKehidupan from '../../assets/image/Ruang-Sejarah-Kehidupan.jpg';
import Logofb from '../../assets/image/logofb.png';

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
  return (
    <>
      <MainLayout>
        <Navbar />
        <Header image={RuangSejarahKehidupan} />

        <div className='bg-white'>
          <div className='flex items-center justify-center'>
            <div className='w-11/12 flex flex-row mt-5'>
              <div className='text-black w-1/3'>
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
              <div className='text-black w-1/3'>
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
              <div className='w-1/3 text-black flex items-center justify-center'>
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
              <p>
                Museum Geologi didirikan pada tanggal 16 Mei 1929. Museum ini
                direnovasi dengan mendapat dana bantuan dari JICA. Setelah
                renovasi selesai, Museum Geologi dibuka kembali dan diresmikan
                oleh Wakil Presiden RI, Megawati Soekarnoputri pada 23 Agustus
                2000.Sebagai monumen bersejarah, museum ini berada di bawah
                perlindungan pemerintah dan merupakan peninggalan sejarah
                nasional. Di museum ini, tersimpan dan mengelola berbagai materi
                geologi, seperti fosil, batuan, dan mineral. Semua materi
                tersebut dikumpulkan selama kerja lapangan di Indonesia sejak
                tahun 1850.
              </p>
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
          <div className='flex items-center justify-center'>
            <div className='w-3/5'>
              <div className='flex flex-col gap-5'>
                {Reviews.map((item, index) => (
                  <div
                    className='bg-amber-400 w-full h-auto rounded-xl flex flex-col md:flex-row p-5 gap-4 justify-center items-center'
                    key={index}
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