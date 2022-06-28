import location from '../assets/location.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'

export const footerData = [
    {
        title: 'Menu',
        body: [
            {
                title: 'Yeni'
            },
            {
                title: 'Endirimlər'
            },
            {
                title: 'Aksessuarlar'
            },
            {
                title: 'Bütün brendlər'
            },
        ]
    },
    {
        title: 'Kömək',
        body: [
            {
                title: 'Tez-tez soruşulan suallar'
            },
            {
                title: 'Çatdırılma xidməti'
            },
            {
                title: 'Geri qaytarılma şərtləri'
            }
        ]
    },
    {
        title: 'Əlaqə',
        body: [
            {
                title: 'M. K. Ataturk avenue 89, Baku, Azerbaijan',
                icon: <img src={location} alt="" />
            },
            {
                title: 'example@gmail.com',
                icon: <img src={mail} alt="" />

            },
            {
                title: '*2108',
                icon: <img src={phone} alt="" />

            }
        ]
    }

]