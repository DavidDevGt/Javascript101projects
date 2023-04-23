const images = [
    { src: 'https://cdn.leonardo.ai/users/4c984527-3e25-478b-ae9a-04b6462ff957/generations/6c59343a-0bed-41e8-9f3d-1c14efb6ace7/variations/Default_A_vibrant_Pop_Art_Deco_BMW_Motorcycle_detailed_with_tr_3_6c59343a-0bed-41e8-9f3d-1c14efb6ace7_1.jpg', alt: '' },
    { src: 'https://cdn.leonardo.ai/users/4c984527-3e25-478b-ae9a-04b6462ff957/generations/44444b0c-b109-45c8-a2e5-2d994c3b6296/variations/Default_poster_of_Lamborghini_Lamborghini_Murcielago_county_ro_0_44444b0c-b109-45c8-a2e5-2d994c3b6296_1.jpg', alt: '' },
    { src: 'https://cdn.leonardo.ai/users/4c984527-3e25-478b-ae9a-04b6462ff957/generations/52b5a2e5-0b62-49b1-a4d1-14f3c95d4450/variations/Default_fullbody_beautiful_female_detailed_face_detailed_eyes_1_52b5a2e5-0b62-49b1-a4d1-14f3c95d4450_1.jpg', alt: '' },
    { src: 'https://cdn.leonardo.ai/users/4c984527-3e25-478b-ae9a-04b6462ff957/generations/71ec1800-2758-4e6c-ac95-09068c6d75c2/variations/Default_Generate_an_image_of_an_intense_magical_stun_attack_in_3_71ec1800-2758-4e6c-ac95-09068c6d75c2_1.jpg', alt: '' },
    { src: 'https://cdn.leonardo.ai/users/4c984527-3e25-478b-ae9a-04b6462ff957/generations/4d1f0b7a-eaef-4253-bab8-4e43365e1ff6/variations/Default_A_lofi_landscape_with_an_anime_twist_illustrated_in_a_1_4d1f0b7a-eaef-4253-bab8-4e43365e1ff6_1.jpg', alt: '' },
    { src: 'https://cdn.leonardo.ai/users/4ccdf061-bc18-4bd1-9110-819e4d5bd479/generations/bf3b15b0-2e6b-4a65-8e82-95ece759d48d/variations/Default_A_distant_planet_system_of_Andromeda_in_digital_illust_0_bf3b15b0-2e6b-4a65-8e82-95ece759d48d_1.jpg', alt: '' },
    { src: 'https://cdn.leonardo.ai/users/4c984527-3e25-478b-ae9a-04b6462ff957/generations/6342067a-e49d-4553-9f19-43ce3dbbe5fb/variations/Default_A_lofi_landscape_for_a_YouTube_channel_banner_in_Pixar_2_6342067a-e49d-4553-9f19-43ce3dbbe5fb_1.jpg', alt: '' },

];

$(document).ready(function() {
    const slider = $('#slider');
    images.forEach(function(image) {
        const img = $('<img>').attr({
            src: image.src,
            alt: image.alt
        });
        const slide = $('<div>').append(img);
        slider.append(slide);
    });
    slider.slick();
});