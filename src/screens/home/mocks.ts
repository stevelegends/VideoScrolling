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

export const reals = [
  {video: '1', url: 'https://i.imgur.com/dtmFXd8.mp4'},
  {video: '2', url: 'https://i.imgur.com/sIhrW6W.mp4'},
  {video: '3', url: 'https://i.imgur.com/X5l475S.mp4'},
  {video: '4', url: 'https://i.imgur.com/TiEGMsr.mp4'},
  {video: '5', url: 'https://i.imgur.com/Ke2dTVN.mp4'},
  {video: '6', url: 'https://i.imgur.com/7EFuoBX.mp4'},
  {video: '7', url: 'https://i.imgur.com/yU6Hamq.mp4'},
  {video: '8', url: 'https://i.imgur.com/vRhd6LQ.mp4'},
  {video: '9', url: 'https://i.imgur.com/QzklVv3.mp4'},
  {video: '10', url: 'https://i.imgur.com/z4RaZU2.mp4'},
  {video: '11', url: 'https://i.imgur.com/zzJQ1Ui.mp4'},
  {video: '12', url: 'https://i.imgur.com/c0FQI38.mp4'},
  {video: '13', url: 'https://i.imgur.com/ZLzyQOn.mp4'},
  {video: '14', url: 'https://i.imgur.com/gPO82AP.mp4'},
  {video: '15', url: 'https://i.imgur.com/zmUux4l.mp4'},
  {video: '16', url: 'https://i.imgur.com/x5GxnkV.mp4'},
  {video: '17', url: 'https://i.imgur.com/ASzJpPZ.mp4'},
  {video: '18', url: 'https://i.imgur.com/TwCIqqf.mp4'},
  {video: '19', url: 'https://i.imgur.com/5yhfQMf.mp4'},
  {video: '20', url: 'https://i.imgur.com/wXvwjzL.mp4'},
  {video: '21', url: 'https://i.imgur.com/7DvtLG5.mp4'},
  {video: '22', url: 'https://i.imgur.com/8O8i3yx.mp4'},
  {video: '23', url: 'https://i.imgur.com/rHA4ZzI.mp4'},
  {video: '24', url: 'https://i.imgur.com/3MhcTew.mp4'},
  {video: '25', url: 'https://i.imgur.com/sH5uwgJ.mp4'},
  {video: '26', url: 'https://i.imgur.com/mTfVrsn.mp4'},
  {video: '27', url: 'https://i.imgur.com/ksDUG6Z.mp4'},
  {video: '28', url: 'https://i.imgur.com/yv7HG4j.mp4'},
  {video: '29', url: 'https://i.imgur.com/coOiYZ9.mp4'},
  {video: '30', url: 'https://i.imgur.com/d6iVked.mp4'},
  {video: '31', url: 'https://i.imgur.com/BH9sZ4F.mp4'},
  {video: '32', url: 'https://i.imgur.com/IBE0kfo.mp4'},
  {video: '33', url: 'https://i.imgur.com/fGAQXtx.mp4'},
  {video: '34', url: 'https://i.imgur.com/Ok8Kiud.mp4'},
  {video: '35', url: 'https://i.imgur.com/B0q2ZgC.mp4'},
  {video: '36', url: 'https://i.imgur.com/lwCPPKQ.mp4'},
  {video: '37', url: 'https://i.imgur.com/Qjxtiih.mp4'},
  {video: '38', url: 'https://i.imgur.com/PswMc0S.mp4'},
  {video: '39', url: 'https://i.imgur.com/yyaXl08.mp4'},
  {video: '40', url: 'https://i.imgur.com/bq4zids.mp4'},
  {video: '41', url: 'https://i.imgur.com/KaETgdn.mp4'},
  {video: '42', url: 'https://i.imgur.com/oUI9LJr.mp4'},
  {video: '43', url: 'https://i.imgur.com/v2XV3WZ.mp4'},
  {video: '44', url: 'https://i.imgur.com/TffgSKf.mp4'},
  {video: '45', url: 'https://i.imgur.com/o7kCjGX.mp4'},
  {video: '46', url: 'https://i.imgur.com/Xlfrn9h.mp4'},
  {video: '47', url: 'https://i.imgur.com/7ScJi43.mp4'},
  {video: '48', url: 'https://i.imgur.com/CKueT4B.mp4'},
  {video: '49', url: 'https://i.imgur.com/mwJiQdJ.mp4'},
  {video: '50', url: 'https://i.imgur.com/wenZCk5.mp4'},
  {video: '51', url: 'https://i.imgur.com/Z3d1Ztj.mp4'},
  {video: '52', url: 'https://i.imgur.com/KQzlzeP.mp4'},
  {video: '53', url: 'https://i.imgur.com/dJsnQcq.mp4'},
  {video: '54', url: 'https://i.imgur.com/aKBpzbu.mp4'},
  {video: '55', url: 'https://i.imgur.com/4230pmK.mp4'},
  {video: '56', url: 'https://i.imgur.com/XMyH5gW.mp4'},
  {video: '57', url: 'https://i.imgur.com/ViZvnw4.mp4'},
  {video: '58', url: 'https://i.imgur.com/s0vNoa1.mp4'},
  {video: '59', url: 'https://i.imgur.com/RDXdqll.mp4'},
  {video: '60', url: 'https://i.imgur.com/8Uf34lT.mp4'},
  {video: '61', url: 'https://i.imgur.com/kLFmq4S.mp4'},
  {video: '62', url: 'https://i.imgur.com/8EgObNI.mp4'},
  {video: '63', url: 'https://i.imgur.com/OXeSJaJ.mp4'},
  {video: '64', url: 'https://i.imgur.com/19GCb4k.mp4'},
  {video: '65', url: 'https://i.imgur.com/esaWJVe.mp4'},
  {video: '66', url: 'https://i.imgur.com/wSkXizF.mp4'},
  {video: '67', url: 'https://i.imgur.com/tyMCaRX.mp4'},
  {video: '68', url: 'https://i.imgur.com/a0mH88a.mp4'},
  {video: '69', url: 'https://i.imgur.com/FB7CIdf.mp4'},
  {video: '70', url: 'https://i.imgur.com/2QCYLEf.mp4'},
  {video: '71', url: 'https://i.imgur.com/Y2GABz5.mp4'},
  {video: '72', url: 'https://i.imgur.com/Ul7ecC6.mp4'},
  {video: '73', url: 'https://i.imgur.com/xMJNSr6.mp4'},
  {video: '74', url: 'https://i.imgur.com/lS1GWIX.mp4'},
  {video: '75', url: 'https://i.imgur.com/yfSximi.mp4'},
  {video: '76', url: 'https://i.imgur.com/SbUMOM4.mp4'},
  {video: '77', url: 'https://i.imgur.com/6iCwEPS.mp4'},
  {video: '78', url: 'https://i.imgur.com/gA7Zcy1.mp4'},
  {video: '79', url: 'https://i.imgur.com/4RoU5Jv.mp4'},
  {video: '80', url: 'https://i.imgur.com/ZEK6Rm0.mp4'},
  {video: '81', url: 'https://i.imgur.com/JkLVDf5.mp4'},
  {video: '82', url: 'https://i.imgur.com/whUDt3C.mp4'},
  {video: '83', url: 'https://i.imgur.com/IMTbVow.mp4'},
  {video: '84', url: 'https://i.imgur.com/TZOi5Al.mp4'},
  {video: '85', url: 'https://i.imgur.com/kn8tFpn.mp4'},
  {video: '86', url: 'https://i.imgur.com/7x0NWtl.mp4'},
  {video: '87', url: 'https://i.imgur.com/dixgnla.mp4'},
  {video: '88', url: 'https://i.imgur.com/0uUHDp3.mp4'},
  {video: '89', url: 'https://i.imgur.com/22ch70B.mp4'},
  {video: '90', url: 'https://i.imgur.com/IsxaZ1y.mp4'},
  {video: '91', url: 'https://i.imgur.com/WHf38sX.mp4'},
  {video: '92', url: 'https://i.imgur.com/fmsoM62.mp4'},
  {video: '93', url: 'https://i.imgur.com/LNcKlut.mp4'},
  {video: '94', url: 'https://i.imgur.com/wKp5am9.mp4'},
  {video: '95', url: 'https://i.imgur.com/qzfm1vy.mp4'},
  {video: '96', url: 'https://i.imgur.com/TUc1prx.mp4'},
  {video: '97', url: 'https://i.imgur.com/fHNEXaM.mp4'},
  {video: '98', url: 'https://i.imgur.com/UzWK9yP.mp4'},
  {video: '99', url: 'https://i.imgur.com/ou4K5mI.mp4'},
  {video: '100', url: 'https://i.imgur.com/ReiuFSS.mp4'},
  {video: '101', url: 'https://i.imgur.com/DpHODBH.mp4'},
  {video: '102', url: 'https://i.imgur.com/4jinWU2.mp4'},
  {video: '103', url: 'https://i.imgur.com/Rowvh0q.mp4'},
  {video: '104', url: 'https://i.imgur.com/4rNiRHx.mp4'},
  {video: '105', url: 'https://i.imgur.com/eBK3Ijo.mp4'},
  {video: '106', url: 'https://i.imgur.com/sP560UU.mp4'},
  {video: '107', url: 'https://i.imgur.com/ILZbH1j.mp4'},
  {video: '108', url: 'https://i.imgur.com/BiO2wlh.mp4'},
  {video: '109', url: 'https://i.imgur.com/aDuKJyL.mp4'},
  {video: '110', url: 'https://i.imgur.com/c04XPvW.mp4'},
  {video: '111', url: 'https://i.imgur.com/Nglfe8K.mp4'},
  {video: '112', url: 'https://i.imgur.com/bywGFLK.mp4'},
  {video: '113', url: 'https://i.imgur.com/aQs4Wox.mp4'},
  {video: '114', url: 'https://i.imgur.com/MbBN6HS.mp4'},
  {video: '115', url: 'https://i.imgur.com/b640js5.mp4'},
  {video: '116', url: 'https://i.imgur.com/wqEqMRN.mp4'},
  {video: '117', url: 'https://i.imgur.com/DHWwPFJ.mp4'},
  {video: '118', url: 'https://i.imgur.com/c7ZnRoV.mp4'},
  {video: '119', url: 'https://i.imgur.com/iLEf2vH.mp4'},
  {video: '120', url: 'https://i.imgur.com/VcUt45Y.mp4'},
  {video: '121', url: 'https://i.imgur.com/fs39XIs.mp4'},
  {video: '122', url: 'https://i.imgur.com/XUhpWRR.mp4'},
  {video: '123', url: 'https://i.imgur.com/5ACESF0.mp4'},
  {video: '124', url: 'https://i.imgur.com/ICM88Nd.mp4'},
  {video: '125', url: 'https://i.imgur.com/CWT9H7K.mp4'},
  {video: '126', url: 'https://i.imgur.com/3y9JcTn.mp4'},
]; 
