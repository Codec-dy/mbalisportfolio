import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import mbali_pic from './mbali.jpg'
import laptop from './laptop.png'
import Resume_Mbali from './Resume_Mbali.pdf'
import address from './address.png'
import telephone from './telephone.png' 
import email from './email.png'
import available from './available.png'

// Projects imports
import twisted_tea from '../projects/twisted.mp4'
import twisted_tea_img from '../projects/twistedPic.png'
import documentary from '../projects/Documentary.mp4'
import documentary_img from '../projects/documentaryPic1.png'
import documentary_img2 from '../projects/documentaryPic2.png'
import poem from '../projects/poem.mp4'
import poemPic from '../projects/poemPic.png'
import musicVidPic from '../projects/musicVideoPic.png'
import musicVid from '../projects/musicVid.mp4'
const graphicDesignImages = import.meta.glob('../projects/graphicDesign/*.{png,jpg,jpeg,svg}', { eager: true });
export { graphicDesignImages };

export const assets = {
   address,
    telephone,
    email,
    available,
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    mbali_pic,
    laptop,
    Resume_Mbali
}
const imageUrl = new URL(Object.keys(graphicDesignImages)[0], import.meta.url).href;
export const projects = [
    {
        id: 1,
        title: 'Twisted Tea Commercial',
        category: 'Video Commercial',
        description: 'A refreshing and fun commercial showcasing the unique taste and vibrant lifestyle associated with Twisted Tea. The ad captures moments of friends enjoying Twisted Tea at various outdoor events, highlighting its perfect blend of real brewed tea and a twist of lemon. The commercial emphasizes the brand’s message of enjoying life’s simple pleasures with a refreshing twist.',
        img: twisted_tea_img,
        vid: twisted_tea,
        techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
    },
    {
        id: 2,
        title: 'Earlham Documentary',
        category: 'Documentary',
        description: 'A compelling and informative documentary that explores the history and culture of Earlham College. The film features interviews with students, faculty, and alumni, as well as footage of campus life and events. The documentary highlights the unique values and traditions of Earlham, as well as its commitment to social justice, sustainability, and community engagement. The film aims to showcase the spirit and ethos of Earlham College and inspire viewers to learn more about this vibrant and inclusive community.',
        img: documentary_img,
        vid: documentary,
        techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
    },
    {
        id: 3,
        title: 'Poem',
        category: 'Videography',
        description: 'A visually stunning and emotionally evocative short film that brings a poem to life through a combination of striking visuals and powerful sound design. The film explores themes of love, loss, and memory, and invites viewers to reflect on the beauty and fragility of life. The film features a series of cinematic shots that capture the essence of the poem and create a sense of intimacy and connection with the audience. The film aims to evoke a range of emotions and leave a lasting impression on viewers.',
        img: poemPic,
        vid: poem,
        techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
    },
    
    
    {
        id: 4,
        title: 'Music Video',
        category: 'Video Production',
        description: 'A visually captivating and emotionally engaging music video that tells a story through a combination of music, visuals, and choreography. The video features a talented artist performing an original song in a variety of settings, accompanied by a cast of dancers and actors who bring the lyrics to life. The video explores themes of love, heartbreak, and redemption, and invites viewers to connect with the music on a deeper level. The video aims to entertain, inspire, and move audiences with its powerful storytelling and creative visuals.',
        img: musicVidPic,
        vid: musicVid,
        techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
    },
    {
        id: 5,
        title: 'Graphic Design',
        category: 'Graphic Design, Poster Design, Logo Design',
        description: 'A collection of graphic design projects showcasing my skills in poster design, logo design, and branding. The projects feature a variety of styles and themes, from minimalist and modern to bold and colorful. Each design is created with attention to detail and a focus on visual impact, with the goal of communicating a clear message and engaging the audience. The designs are versatile and can be adapted for a wide range of applications, from print to digital media.',
        img: imageUrl,
        vid: '',
        techUsed: 'Canva',
        link:'/project/graphicDesign/5'
    },

]

export const certificates = [
// {
//     id: 1,
//     title: 'React Developer',
//     institution: 'Udemy',
//     date: 'April 2022',
//     img:laptop,
//     link: Resume_Mbali
// }
]

export const aboutme = {
    background: 'I am a passionate and creative video editor with over 5 years of experience in creating engaging and impactful video content. I have a strong eye for detail and a deep understanding of visual storytelling, which allows me to bring ideas to life and captivate audiences. I am proficient in Adobe Premiere Pro, After Effects, and Audition, and have a proven track record of delivering high-quality videos that meet client objectives and exceed expectations. I am always looking for new opportunities to collaborate with brands and creators to create compelling video content that resonates with audiences and drives results.',
    education: 'I hold a Bachelor’s degree in Film and Media Studies from the University of Cape Town, where I developed a strong foundation in film theory, production, and editing. I have also completed various online courses in video editing and motion graphics to enhance my skills and stay up to date with the latest industry trends. I am committed to continuous learning and growth, and I am always seeking new challenges and opportunities to expand my knowledge and expertise.' ,
    skills: 'My skills include video editing, motion graphics, color correction, sound design, and visual effects. I am proficient in Adobe Creative Suite, including Premiere Pro, After Effects, Audition, and Photoshop. I have experience working on a wide range of projects, including commercials, music videos, short films, and social media content. I am passionate about storytelling and creating visually compelling videos that engage and inspire audiences.'   ,
    hobbies: 'In my free time, I enjoy exploring new places, trying new foods, and spending time outdoors. I am an avid reader and love discovering new books and authors. I also enjoy photography and capturing moments that inspire me. I am passionate about travel and cultural exchange, and I am always looking for new adventures and experiences to broaden my horizons.'  

}
