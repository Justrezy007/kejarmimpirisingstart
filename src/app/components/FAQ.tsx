import React from 'react'

const FAQ = () => {
    return (
        <div id="faq" className="w-full bg-base-200 mx-auto">
            <div className="md:w-10/12 px-8 md:px-0 py-12 mx-auto">
                <h2 className="mb-12 text-3xl font-extrabold leading-9 text-neutral-100 ">
                    FAQs
                </h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Siapa yang bisa mengikuti audisi Kejar Mimpi Rising Start: Singing Competition 2024 ini?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>
                        Siapa saja yang memenuhi persyaratan sesuai domisili dengan rentang umur 12-40 tahun dapat mengikuti audisi Kejar Mimpi Rising Start: Singing Competition 2024 ini tanpa dipungut biaya apapun. Pendaftar wajib untuk memiliki akun OCTO Pay dengan minimum deposit Rp10.000
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Bagaimana cara untuk membuka akun OCTO Pay di OCTO Mobile?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <ul className='list-disc ml-4'>
                            <li>Download aplikasi OCTO Mobile di Play Store / App Store</li>
                            <li>Pilih Open Account Now</li>
                            <li>Pilih produk OCTO Pay</li>
                            <li>Menyetujui Syarat dan Ketentuan</li>
                            <li>Melengkapi informasi pribadi (Nama lengkap, tanggal lahir, nomor ponsel dan alamat email) dan membuat User ID OCTO Mobile, PIN OCTO Mobile dan kode registrasi (Jika ada)</li>
                            <li>Memasukan passcode yang telah dikirimkan ke nomor ponsel</li>
                            <li>Pendaftaran OCTO Pay berhasil! Nomor akun akan ditampilkan sesuai dengan nomor ponsel yang terdaftar</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Apa yang harus dilakukan saat audisi online dan offline?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p className="text-base leading-6 ">
                        Peserta akan menyanyikan lagu Kejar Mimpimu - Dee Lestari sesuai dengan syarat & ketentuan untuk audisi online maupun offline<br />
                        </p>
                        <p className="text-base leading-6 mt-2">
                            Informasi Tambahan
                        </p>
                        <ul className='list-disc ml-4'>
                            <li>Dilarang untuk melakukan gratifikasi</li>
                            <li>Apabila tidak memenuhi setiap ketentuan yang ada, maka peserta akan otomatis diskualifikasi</li>
                            <li>Wajib menggunakan pakaian rapi (semi formal) saat melakukan audisi</li>
                            <li>Dilarang menampilkan hal sensitif yang mengandung unsur SARA</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Bagaimana timeline dan ketentuan lebih lanjut dari tahap audisi?
                    </div>
                    <div className="collapse-content text-gray-400 leading-6">
                        <ul>
                            <li className='mt-3'><strong className='text-lg'>Audisi Tahap 1</strong>
                                <ul>
                                    <li className='mt-3'><strong className='font-semibold'>Audisi Online:</strong></li>
                                    <p>Registrasi &amp; Audisi berlangsung dari Senin, 6 Mei 2024 - Kamis, 20 Juni 2024.</p>
                                    <li className='mt-3'><strong className='font-semibold'>Audisi Offline:</strong>
                                        <ul className='list-disc ml-4'>
                                            <li>Yogjakarta:
                                                <ul>
                                                    <li>Registrasi: Senin, 6 Mei 2024 - Selasa, 14 Mei 2024</li>
                                                    <li>Audisi: Sabtu, 18 Mei 2024</li>
                                                </ul>
                                            </li>
                                            <li>Jakarta:
                                                <ul>
                                                    <li>Registrasi: Senin, 6 Mei 2024 - Sabtu, 25 Mei 2024</li>
                                                    <li>Audisi: Sabtu, 1 Juni 2024</li>
                                                </ul>
                                            </li>
                                            <li>Manado:
                                                <ul>
                                                    <li>Registrasi: Senin, 6 Mei 2024 - Sabtu, 1 Juni 2024</li>
                                                    <li>Audisi: Sabtu, 8 Juni 2024</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className='mt-3'><strong className='text-lg'>Audisi Tahap 2 - Top 10:</strong>
                                <ul className='list-disc ml-4'>
                                    <li>Audisi Tahap 2 dilakukan di Jakarta dari Jumat, 12 Juli 2024 - Minggu, 14 Juli 2024.</li>
                                    <li>Peserta yang lolos ke tahap ini akan dihubungi melalui email dan/atau WhatsApp untuk instruksi lebih lanjut.</li>
                                    <li>Peserta wajib memiliki rekening tabungan CIMB Niaga.</li>
                                    <li>Selama audisi offline di Jakarta, peserta akan dipanggil sesuai dengan nomor urut yang telah ditentukan.</li>
                                    <li>Peserta harus menampilkan lagu &quot;Kejar Mimpimu - Dee Lestari&quot; versi bahasa Inggris dan menyiapkan tambahan satu lagu bebas.</li>
                                    <li>Durasi audisi sekitar 7 menit dan peserta dapat menggunakan instrumen musik atau lagu minus one dari &quot;Kejar Mimpimu - Dee Lestari&quot;.</li>
                                </ul>
                            </li>

                            <li className='mt-3'><strong className='text-lg'>Audisi Tahap 3 - Top Regional:</strong>
                                <ul className='list-disc ml-4'>
                                    <li>Audisi Tahap 3 akan diadakan di Jakarta dari Selasa, 30 Juli 2024 - Sabtu, 3 Agustus 2024.</li>
                                    <li>Peserta yang lolos ke tahap ini akan dihubungi untuk instruksi lebih lanjut.</li>
                                    <li>Pada audisi tahap ini, Top 2 dari masing-masing negara akan dikumpulkan untuk berkompetisi kembali dalam menentukan pemenang Top 3 regional</li>
                                    <li>Persyaratan dan prosedur audisi sama dengan Tahap 2. </li>
                                    <li>Setelah pemenang diumumkan, pemenang Top 3 akan menjalani Training Offline yang detailnya masih akan diumumkan lebih lanjut. </li>
                                    <li>Pemenang Top 3 wajib menjalani Training Offline menuju persiapan Konser Kejar Mimpi untuk Indonesia 2024 yang detailnya akan diumumkan lebih lanjut.</li>
                                    <li>Pemenang Top 3 akan tampil di Konser Kejar Mimpi untuk Indonesia 2024 bersama penyanyi papan atas Indonesia pada tanggal 24 Agustus 2024 di Surakarta </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Kapan pengumuman hasil audisi?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <table className='table table-zebra' >
                            <thead>
                                <tr className='text-center border border-white border-opacity-10'>
                                    <th className='border border-white border-opacity-10'>Informasi</th>
                                    <th className='border border-white border-opacity-10'>Jadwal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border border-white border-opacity-10'>
                                    <td className='border border-white border-opacity-10'>Pengumuman Lolos Tahap 1 | Top 10 Indonesia</td>
                                    <td className='border border-white border-opacity-10'>Sabtu, 29 Juni 2024</td>
                                </tr>
                                <tr className='border border-white border-opacity-10'>
                                    <td className='border border-white border-opacity-10'>Pengumuman Lolos Tahap 2 | Top 2 Indonesia</td>
                                    <td className='border border-white border-opacity-10'>Sabtu, 13 Juli 2024</td>
                                </tr>
                                <tr className='border border-white border-opacity-10'>
                                    <td className='border border-white border-opacity-10'>Pengumuman Lolos Tahap 3 | Top 3 Regional</td>
                                    <td className='border border-white border-opacity-10'>Rabu, 31 Juli 2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Bagaimana aspek penilaian dari audisi ini?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <table className='table table-zebra border border-white border-opacity-10'>
                            <thead>
                            <tr className='border border-white border-opacity-10'>
                                <th>Audisi</th>
                                <th>Aspek Penilaian</th>
                                <th>Kualitas Vokal</th>
                                <th>Penghayatan Lagu</th>
                                <th>Penguasaan Panggung</th>
                                <th>Lafal Bahasa Inggris</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className='border border-white border-opacity-10'>
                                <td >Tahap 1</td>
                                <td>Bobot (%)</td>
                                <td>40%</td>
                                <td>30%</td>
                                <td>30%</td>
                                <td >-</td>
                            </tr>
                            <tr className='border border-white border-opacity-10'>
                                <td >Tahap 2-3</td>
                                <td>Bobot (%)</td>
                                <td>40%</td>
                                <td>20%</td>
                                <td>20%</td>
                                <td>20%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Apakah peserta yang lolos ke tahap 2 dan 3 akan diberikan akomodasi oleh CIMB Niaga?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>
                        Setiap peserta akan diberikan akomodasi selama kegiatan berlangsung
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Di mana Konser Kejar Mimpi untuk Indonesia 2024 akan dilaksanakan?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>
                        Konser Kejar Mimpi untuk Indonesia 2024 akan dilaksanakan di Surakarta pada tanggal 24 Agustus 2024 dengan jajaran penampilan oleh penyanyi papan atas dari Indonesia.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Bagaimana saya dapat mendapatkan informasi terupdate terkait program ini?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>
                        Ikuti sosial media @cimb_niaga dan @kejarmimpi.id. Apabila terdapat kendala maupun informasi lebih lanjut, dapat menghubungi call center CIMB Niaga 14041
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ