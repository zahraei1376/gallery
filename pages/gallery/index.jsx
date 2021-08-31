import { GalleryPageSecion} from './galleryPage.styles';

const images = [
    {id: "1",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-1.jpg'},
    {id: "2",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-2.jpg'},
    {id: "3",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-3.jpg'},
    {id: "4",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-4.jpg'},
    {id: "5",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-5.jpg'},
    {id: "6",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-6.jpg'},
    {id: "7",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-7.jpg'},
    {id: "8",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-8.jpg'},
    {id: "9",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-9.jpg'},
    {id: "10",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-10.jpg'},
    {id: "11",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-11.jpg'},
    {id: "12",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-12.jpg'},
    {id: "13",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-13.jpg'},
    {id: "14",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-14.jpg'},
    {id: "15",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-15.jpg'},
    {id: "16",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-16.jpg'},
    {id: "17",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-17.jpg'},
    {id: "18",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-18.jpg'},
    {id: "19",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-19.jpg'},
    {id: "20",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-20.jpg'},
];
//////////////////////////////////////////////
const GalleryPage = ({RemoveItem}) =>{
    //////////////////////////////////////////////
    return(
        <GalleryPageSecion>
            <Gallery images = {images}/>
        </GalleryPageSecion>
    )
};

export default GalleryPage;