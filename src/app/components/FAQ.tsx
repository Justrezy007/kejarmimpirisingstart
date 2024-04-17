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
                        Siapa yang bisa mengikuti audisi CIMB Niaga Rising Start: Singing Competition 2024 ini?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>
                            Siapa saja yang memenuhi persyaratan sesuai domisili dengan rentang umur 12-40 tahun dapat mengikuti audisi CIMB Niaga Rising Start: Singing Competition 2024 ini tanpa dipungut biaya apapun. Pendaftar wajib untuk memiliki akun OCTO Pay dengan minimum deposit Rp10.000
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
                            Peserta akan menyanyikan lagu Kejar Mimpimu - Dee Lestari sesuai dengan syarat & ketentuan untuk audisi online maupun offline
                        </p>
                        <p className="text-base leading-6 ">
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
                    <div className="collapse-content text-gray-400">
                        <ul>
                            <li><strong>Audisi Tahap 1:</strong>
                                <ul>
                                    <li>Kompetisi dilakukan secara online.</li>
                                    <li>Registrasi & Audisi berlangsung dari Sabtu, 4 Mei 2024, hingga Kamis, 20 Juni 2024.</li>
                                    <li><strong>Audisi Offline:</strong>
                                        <ul className='list-disc ml-4'>
                                            <li>Manado:
                                                <ul>
                                                    <li>Registrasi: Sabtu, 4 Mei 2024 - Minggu, 12 Mei 2024</li>
                                                    <li>Audisi: Minggu, 18 Mei 2024 (Kuota: 75)</li>
                                                </ul>
                                            </li>
                                            <li>Jogjakarta:
                                                <ul>
                                                    <li>Registrasi: Sabtu, 4 Mei 2024 - Sabtu, 25 Mei 2024</li>
                                                    <li>Audisi: Sabtu, 1 Juni 2023 (Kuota: 75)</li>
                                                </ul>
                                            </li>
                                            <li>Jakarta:
                                                <ul>
                                                    <li>Registrasi: Sabtu, 4 Mei 2024 - Sabtu, 8 Juni 2024</li>
                                                    <li>Audisi: Sabtu, 15 Juni 2024 (Kuota: 150)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li><strong>Audisi Tahap 2 - Top 10:</strong>
                                <ul className='list-disc ml-4'>
                                    <li>Audisi Tahap 2 dilakukan di Jakarta dari Jumat, 26 Juli 2024, hingga Selasa, 30 Juli 2024.</li>
                                    <li>Peserta yang lolos ke tahap ini akan dihubungi melalui email dan/atau WhatsApp untuk instruksi lebih lanjut.</li>
                                    <li>Peserta wajib memiliki rekening tabungan CIMB Niaga.</li>
                                    <li>Selama audisi offline di Jakarta, peserta akan dipanggil sesuai dengan nomor urut yang telah ditentukan.</li>
                                    <li>Peserta harus menampilkan lagu &quot;Kejar Mimpimu - Dee Lestari&quot; versi bahasa Inggris dan menyiapkan tambahan satu lagu bebas.</li>
                                    <li>Durasi audisi sekitar 7 menit, dan peserta dapat menggunakan instrumen musik atau lagu minus one dari &quot;Kejar Mimpimu - Dee Lestari&quot;.</li>
                                </ul>
                            </li>

                            <li><strong>Audisi Tahap 3 - Top Regional:</strong>
                                <ul className='list-disc ml-4'>
                                    <li>Audisi Tahap 3 akan diadakan di Jakarta dari Jumat, 12 Juli 2024, hingga Selasa, 16 Juli 2024.</li>
                                    <li>Peserta yang lolos ke tahap ini akan dihubungi untuk instruksi lebih lanjut.</li>
                                    <li>Persyaratan dan prosedur audisi mirip dengan Tahap 2.</li>
                                </ul>
                            </li>
                        </ul>

                        <p>Setelah itu, pemenang Top 1 akan menjalani Training Offline yang detailnya masih akan diumumkan di Jakarta. Pemenang akan tampil di konser &quot;Kejar Mimpi untuk Indonesia 2024&quot; bersama Andi Rianto dan beberapa penyanyi papan atas pada tanggal 24 Agustus 2024.</p>

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
                                    <td className='border border-white border-opacity-10'>Pengumuman Lolos Tahap 1 | Top 10</td>
                                    <td className='border border-white border-opacity-10'>Sabtu, 29 Juni 2024</td>
                                </tr>
                                <tr className='border border-white border-opacity-10'>
                                    <td className='border border-white border-opacity-10'>Pengumuman Lolos Tahap 2 | Top 3</td>
                                    <td className='border border-white border-opacity-10'>Sabtu, 6 Juli 2024</td>
                                </tr>
                                <tr className='border border-white border-opacity-10'>
                                    <td className='border border-white border-opacity-10'>Pengumuman Lolos Tahap 3 | Top 1</td>
                                    <td className='border border-white border-opacity-10'>Sabtu, 13 Juli 2024</td>
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
                                <td>Keterangan</td>
                                <td >Aspek penilaian yang diberlakukan pada tahap awal audisi.</td>
                            </tr>
                            <tr className='border border-white border-opacity-10'>
                                <td >Tahap 2-3</td>
                                <td>Bobot (%)</td>
                                <td>40%</td>
                                <td>20%</td>
                                <td>20%</td>
                                <td>20%</td>
                            </tr>
                            <tr className='border border-white border-opacity-10'>
                                <td>Keterangan</td>
                                <td>Aspek penilaian yang diberlakukan pada tahap lanjutan audisi.</td>
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
                            Khusus peserta di luar kota Jabodetabek, pada audisi  tahap 2 dan 3 akan diberikan akomodasi oleh CIMB Niaga
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Di mana konser Kejar Mimpi 2024 akan dilaksanakan?
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>
                            Konser Kejar Mimpi 2024 akan dilaksanakan di Solo pada tanggal 24 Agustus 2024 dengan jajaran penampilan oleh penyanyi papan atas dari Indonesia
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
                            Ikuti sosial media CIMB Niaga dan apabila terdapat kendala maupun informasi lebih lanjut, dapat menghubungi Instagram @cimb_niaga dan atau @kejarmimpi.id
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ