import {assets} from '../../assets';

export const srcAllPlatformList = [
  assets.media.broadchurch,
  {
    description: '(hls|live) red bull tv',
    uri: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_928.m3u8',
  },
  {
    description: 'invalid URL',
    uri: 'mmt://www.youtube.com',
    type: 'mpd',
  },
  {description: '(no url) Stopped playback', uri: undefined},
  {
    description: '(no view) no View',
    noView: true,
  },
  {
    description: 'Another live sample',
    uri: 'https://live.forstreet.cl/live/livestream.m3u8',
  },
  {
    description: 'another bunny (can be saved)',
    uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
  },
];

export const srcAndroidList = [
  {
    description: 'Another live sample',
    uri: 'https://live.forstreet.cl/live/livestream.m3u8',
  },
  {
    description: '(dash) sintel subtitles',
    uri: 'https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd',
  },
  {
    description: '(mp4) big buck bunny',
    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
  {
    description: '(mp4|subtitles) demo with sintel Subtitles',
    uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0',
    type: 'mpd',
  },
  {
    description: '(mp4) big buck bunny With Ads',
    adTagUrl:
      'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpostoptimizedpodbumper&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator=',
    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
  {
    description: 'WV: Secure SD & HD (cbcs,MP4,H264)',
    uri: 'https://storage.googleapis.com/wvmedia/cbcs/h264/tears/tears_aes_cbcs.mpd',
    drm: {
      // type: DRMType.WIDEVINE,
      licenseServer:
        'https://proxy.uat.widevine.com/proxy?provider=widevine_test',
    },
  },
  {
    description: 'Secure UHD (cenc)',
    uri: 'https://storage.googleapis.com/wvmedia/cenc/h264/tears/tears_uhd.mpd',
    drm: {
      // type: DRMType.WIDEVINE,
      licenseServer:
        'https://proxy.uat.widevine.com/proxy?provider=widevine_test',
    },
  },
];


export const media = [
  {
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb: 'images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
  },
  {
    description: 'The first Blender Open Movie from 2006',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb: 'images/ElephantsDream.jpg',
    title: 'Elephant Dream',
  },
  {
    description:
      'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes',
  },
  {
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerEscapes.jpg',
    title: 'For Bigger Escape',
  },
  {
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerFun.jpg',
    title: 'For Bigger Fun',
  },
  {
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerJoyrides.jpg',
    title: 'For Bigger Joyrides',
  },
  {
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerMeltdowns.jpg',
    title: 'For Bigger Meltdowns',
  },
  {
    description:
      'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb: 'images/Sintel.jpg',
    title: 'Sintel',
  },
  {
    description:
      'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    ],
    subtitle: 'By Garage419',
    thumb: 'images/SubaruOutbackOnStreetAndDirt.jpg',
    title: 'Subaru Outback On Street And Dirt',
  },
  {
    description:
      'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb: 'images/TearsOfSteel.jpg',
    title: 'Tears of Steel',
  },
  {
    description:
      "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    ],
    subtitle: 'By Garage419',
    thumb: 'images/VolkswagenGTIReview.jpg',
    title: 'Volkswagen GTI Review',
  },
  {
    description:
      'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    ],
    subtitle: 'By Garage419',
    thumb: 'images/WeAreGoingOnBullrun.jpg',
    title: 'We Are Going On Bullrun',
  },
  {
    description:
      'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    ],
    subtitle: 'By Garage419',
    thumb: 'images/WhatCarCanYouGetForAGrand.jpg',
    title: 'What care can you get for a grand?',
  },
];