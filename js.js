const container = document.querySelector('.containerr')
const vid = container.querySelectorAll('.vid')
vid.forEach(vids => {

    const videocontainer = vids.querySelectorAll('.video-container')
    videocontainer.forEach(videocont => {

        let video = videocont.querySelector('video')
        let btn1 = videocont.querySelector('.btn1')
        let icon = btn1.querySelector('i')
        let btnnone = videocont.querySelector('.btn-none')
        let h4 = videocont.querySelector('.h-4')
        let videotools = videocont.querySelector('.none')
        let duration = videocont.querySelector('.duration')
        let backdur = videocont.querySelector('.back-dur')
        let sound = videocont.querySelector('input')
        let progress = videocont.querySelector('.vol-progress')
        let backsound = videocont.querySelector('.back-sound')
        let videotxt = videocont.querySelector('.video-txt')
        let playicon = videotools.querySelector('.fa-play')
        let pauseicon = videotools.querySelector('.fa-pause')
        let close = document.getElementById('close')

        playicon.addEventListener('click', () => {
            video.play();
        })

        pauseicon.addEventListener('click', () => {
            video.pause();
        })

        video.style.borderTopRightRadius = 4 + "px"
        video.style.borderTopLeftRadius = 4 + "px"


        video.addEventListener('click', () => {
            if (video.paused) {
                video.play()

                h4.classList.remove('none4')

                close.style.opacity = 1


                icon.classList.remove('ply')
                icon.classList.add('pause')
                icon.classList.remove('fa-play')
                icon.classList.add('fa-pause')

                video.addEventListener('mouseover', () => {
                    icon.style.opacity = 1
                })

                video.addEventListener('mouseout', () => {
                    icon.style.opacity = 0
                })

                icon.addEventListener('mouseover', () => {
                    icon.style.opacity = 1
                })

                close.addEventListener('click', () => {
                    video.pause()

                    h4.classList.add('none4')

                    close.style.opacity = 0

                    icon.classList.remove('pause')
                    icon.classList.add('ply')
                    icon.classList.add('fa-play')
                    icon.classList.remove('fa-pause')

                    videocont.classList.remove('video-L-container')
                    videocont.classList.add('video-container')

                    videotools.classList.remove('video-tools')
                    videotools.classList.add('none')

                    videotxt.classList.remove('none')
                    videotxt.classList.add('video-txt')

                    video.style.maxWidth = 100 + "%"
                    video.style.maxHeight = 487 + "px"

                })

                videocont.classList.add('video-L-container')
                videocont.classList.remove('video-container')

                videotools.classList.add('video-tools')
                videotools.classList.remove('none')

                videotxt.classList.add('none')
                videotxt.classList.remove('video-txt')

                video.style.maxWidth = 860 + "px"
                video.style.maxHeight = 487 + "px"

                videotools.style.maxWidth = 860 + "px"
                videotools.style.top = 90 + "%"
                videotools.style.height = 100 + "px"

                video.addEventListener('timeupdate', () => {
                    let durpos = (video.currentTime / video.duration) * 100;
                    duration.style.width = `${durpos}%`
                })

                backdur.addEventListener('click', (e) => {
                    const progressTime = (e.offsetX / backdur.offsetWidth) * video.duration
                    video.currentTime = progressTime
                })



                sound.addEventListener('input', () => {
                    progress.style.width = sound.value + '%';
                    video.volume = sound.value / 100;
                }, false)


            } else {

                video.addEventListener('mouseout', () => {
                    icon.style.opacity = 1
                })

                video.pause()

                h4.classList.add('none4')

                close.style.opacity = 0

                icon.classList.remove('pause')
                icon.classList.add('ply')
                icon.classList.add('fa-play')
                icon.classList.remove('fa-pause')

                videocont.classList.remove('video-L-container')
                videocont.classList.add('video-container')

                videotools.classList.remove('video-tools')
                videotools.classList.add('none')

                videotxt.classList.remove('none')
                videotxt.classList.add('video-txt')

                video.style.maxWidth = 100 + "%"
                video.style.maxHeight = 487 + "px"

            }
        })



        btn1.addEventListener('click', () => {
            if (video.paused) {
                video.play()

                h4.classList.remove('none4')

                close.style.opacity = 1


                icon.classList.remove('fa-play')
                icon.classList.remove('ply')
                icon.classList.add('fa-pause')
                icon.classList.add('pause')

                video.addEventListener('mouseover', () => {
                    icon.style.opacity = 1
                })

                video.addEventListener('mouseout', () => {
                    icon.style.opacity = 0
                })

                icon.addEventListener('mouseover', () => {
                    icon.style.opacity = 1
                })

                close.addEventListener('click', () => {
                    video.pause()

                    h4.classList.add('none4')

                    close.style.opacity = 0

                    icon.classList.remove('pause')
                    icon.classList.add('ply')
                    icon.classList.add('fa-play')
                    icon.classList.remove('fa-pause')

                    videocont.classList.remove('video-L-container')
                    videocont.classList.add('video-container')

                    videotools.classList.remove('video-tools')
                    videotools.classList.add('none')

                    videotxt.classList.remove('none')
                    videotxt.classList.add('video-txt')

                    video.style.maxWidth = 100 + "%"
                    video.style.maxHeight = 487 + "px"

                })


                videocont.classList.add('video-L-container')
                videocont.classList.remove('video-container')

                videotools.classList.add('video-tools')
                videotools.classList.remove('none')

                videotxt.classList.add('none')
                videotxt.classList.remove('video-txt')

                video.style.maxWidth = 860 + "px"
                video.style.maxHeight = 487 + "px"

                videotools.style.maxWidth = 860 + "px"
                videotools.style.top = 90 + "%"
                videotools.style.height = 100 + "px"

                video.addEventListener('timeupdate', () => {
                    let durpos = (video.currentTime / video.duration) * 100;
                    duration.style.width = `${durpos}%`
                })

                backdur.addEventListener('click', (e) => {
                    const progressTime = (e.offsetX / backdur.offsetWidth) * video.duration
                    video.currentTime = progressTime
                })


                sound.addEventListener('input', () => {
                    progress.style.width = sound.value + '%';
                    video.volume = sound.value / 100;
                }, false)

            } else {

                video.addEventListener('mouseout', () => {
                    icon.style.opacity = 1
                })

                video.pause()

                h4.classList.add('none4')

                close.style.opacity = 0


                icon.classList.remove('pause')
                icon.classList.add('ply')
                icon.classList.add('fa-play')
                icon.classList.remove('fa-pause')

                videocont.classList.remove('video-L-container')
                videocont.classList.add('video-container')

                videotools.classList.remove('video-tools')
                videotools.classList.add('none')

                videotxt.classList.remove('none')
                videotxt.classList.add('video-txt')

                video.style.maxWidth = 100 + "%"
                video.style.maxHeight = 487 + "px"

            }
        })

    })

})
