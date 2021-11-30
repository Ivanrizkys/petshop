const Slide = ({Swiper, SwiperSlide}) => {
    return (
        <Swiper pagination={{type: 'fraction', el: '.swiper-pagination-custom'}} navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}} className="mySwiper">
            <SwiperSlide>
                <div className="font-poppins text-base text-black-primary tracking-wider mt-8">
                    <p className="mb-4">
                        We are a community of animal lovers, especially cats
                        and dogs, we have the initiative to maintain
                        environmental health by helping abandoned animals
                    </p>
                    <p className="mb-4">
                        In addition we also open charities and adoptions for
                        other animal lovers, we are also always willing to
                        accept pets or abandoned animals to be cared for
                        here.
                    </p>
                    <p>
                        Our goal is to make animals feel comfortable and
                        healthy so they won't go extinct
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="font-poppins text-base text-black-primary tracking-wider mt-8">
                    <p className="mb-4">
                        We are a community of animal lovers, especially cats
                        and dogs, we have the initiative to maintain
                        environmental health by helping abandoned animals
                    </p>
                    <p className="mb-4">
                        In addition we also open charities and adoptions for
                        other animal lovers, we are also always willing to
                        accept pets or abandoned animals to be cared for
                        here.
                    </p>
                    <p>
                        Our goal is to make animals feel comfortable and
                        healthy so they won't go extinct
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="font-poppins text-base text-black-primary tracking-wider mt-8">
                    <p className="mb-4">
                        We are a community of animal lovers, especially cats
                        and dogs, we have the initiative to maintain
                        environmental health by helping abandoned animals
                    </p>
                    <p className="mb-4">
                        In addition we also open charities and adoptions for
                        other animal lovers, we are also always willing to
                        accept pets or abandoned animals to be cared for
                        here.
                    </p>
                    <p>
                        Our goal is to make animals feel comfortable and
                        healthy so they won't go extinct
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slide;