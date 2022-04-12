export const SLEEP_DATA = [
  // {
  //   activityId: 400723987,
  //   algoVersion: '5.0.0',
  //   arousalTime: 2672456.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-17T14:32:14.716Z',
  //   creditFromNaps: 9963838.0,
  //   cyclesCount: 8,
  //   debtPost: 1284162.0,
  //   debtPre: 1.2219028e7,
  //   disturbances: 19,
  //   during: {
  //     upper: '2022-03-17T16:17:10.255Z',
  //     lower: '2022-03-17T05:45:41.131Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-17T06:03:31.050Z',
  //         lower: '2022-03-17T05:45:41.131Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T06:11:14.400Z',
  //         lower: '2022-03-17T06:03:32.011Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T06:17:31.233Z',
  //         lower: '2022-03-17T06:11:15.362Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T06:30:02.976Z',
  //         lower: '2022-03-17T06:17:32.194Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T06:41:07.240Z',
  //         lower: '2022-03-17T06:30:03.937Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T06:40:38.400Z',
  //         lower: '2022-03-17T06:39:12.844Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T06:43:32.397Z',
  //         lower: '2022-03-17T06:41:08.201Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:09:09.537Z',
  //         lower: '2022-03-17T06:43:33.358Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T06:57:04.711Z',
  //         lower: '2022-03-17T06:55:09.345Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:00:26.586Z',
  //         lower: '2022-03-17T06:58:32.190Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:06:43.418Z',
  //         lower: '2022-03-17T07:05:16.901Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:14:26.769Z',
  //         lower: '2022-03-17T07:09:10.498Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:27:58.121Z',
  //         lower: '2022-03-17T07:14:27.730Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:18:49.215Z',
  //         lower: '2022-03-17T07:16:24.057Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:43:53.670Z',
  //         lower: '2022-03-17T07:27:59.083Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T07:59:21.341Z',
  //         lower: '2022-03-17T07:43:54.631Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T08:09:56.765Z',
  //         lower: '2022-03-17T07:59:22.302Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T08:03:41.855Z',
  //         lower: '2022-03-17T07:59:51.141Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T08:25:21.543Z',
  //         lower: '2022-03-17T08:09:57.726Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T08:42:41.678Z',
  //         lower: '2022-03-17T08:25:22.504Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T08:57:37.625Z',
  //         lower: '2022-03-17T08:42:42.639Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T09:00:03.744Z',
  //         lower: '2022-03-17T08:57:38.587Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T09:14:01.988Z',
  //         lower: '2022-03-17T08:57:38.587Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T09:08:15.934Z',
  //         lower: '2022-03-17T09:06:19.615Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T09:28:30.057Z',
  //         lower: '2022-03-17T09:14:02.949Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T09:57:30.042Z',
  //         lower: '2022-03-17T09:28:31.019Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T09:41:04.692Z',
  //         lower: '2022-03-17T09:39:10.297Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T10:32:13.213Z',
  //         lower: '2022-03-17T09:57:31.003Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T10:34:37.409Z',
  //         lower: '2022-03-17T10:32:14.174Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T10:38:29.084Z',
  //         lower: '2022-03-17T10:32:14.174Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T10:45:44.557Z',
  //         lower: '2022-03-17T10:38:30.046Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T10:48:37.592Z',
  //         lower: '2022-03-17T10:45:45.518Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T10:48:37.592Z',
  //         lower: '2022-03-17T10:45:45.518Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T10:55:53.073Z',
  //         lower: '2022-03-17T10:48:38.553Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T11:11:17.860Z',
  //         lower: '2022-03-17T10:55:54.035Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T11:10:20.179Z',
  //         lower: '2022-03-17T11:08:54.616Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T11:16:37.015Z',
  //         lower: '2022-03-17T11:11:18.822Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T12:13:02.740Z',
  //         lower: '2022-03-17T11:16:37.976Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T11:25:18.043Z',
  //         lower: '2022-03-17T11:23:23.648Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T11:50:51.329Z',
  //         lower: '2022-03-17T11:47:01.577Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T11:57:36.040Z',
  //         lower: '2022-03-17T11:55:41.644Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T12:35:43.000Z',
  //         lower: '2022-03-17T12:13:03.702Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T12:53:05.066Z',
  //         lower: '2022-03-17T12:35:43.961Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T13:09:57.332Z',
  //         lower: '2022-03-17T12:53:06.027Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T13:17:41.643Z',
  //         lower: '2022-03-17T13:09:58.293Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T13:47:36.414Z',
  //         lower: '2022-03-17T13:17:42.604Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T13:59:42.201Z',
  //         lower: '2022-03-17T13:47:37.375Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T14:02:35.236Z',
  //         lower: '2022-03-17T13:59:43.162Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T14:12:13.952Z',
  //         lower: '2022-03-17T13:59:43.162Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T14:51:18.582Z',
  //         lower: '2022-03-17T14:12:14.914Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T14:56:08.897Z',
  //         lower: '2022-03-17T14:51:19.543Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T14:58:04.254Z',
  //         lower: '2022-03-17T14:56:09.858Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T14:58:04.254Z',
  //         lower: '2022-03-17T14:56:09.858Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T15:13:01.154Z',
  //         lower: '2022-03-17T14:58:05.215Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T15:22:38.899Z',
  //         lower: '2022-03-17T15:13:02.115Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T15:37:37.731Z',
  //         lower: '2022-03-17T15:22:39.861Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T15:45:20.120Z',
  //         lower: '2022-03-17T15:37:38.692Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T15:47:44.322Z',
  //         lower: '2022-03-17T15:45:21.081Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T15:55:27.675Z',
  //         lower: '2022-03-17T15:45:21.081Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T16:09:25.944Z',
  //         lower: '2022-03-17T15:55:28.636Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T16:13:16.657Z',
  //         lower: '2022-03-17T16:09:26.905Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T16:13:16.657Z',
  //         lower: '2022-03-17T16:09:26.905Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T16:16:11.615Z',
  //         lower: '2022-03-17T16:13:17.619Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-17T16:17:09.294Z',
  //         lower: '2022-03-17T16:16:12.577Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8089719e7,
  //   hrBaseline: null,
  //   id: 400723987,
  //   inSleepEfficiency: 0.8131274,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 0,
  //   lightSleepDuration: 16171567,
  //   maxHeartRate: null,
  //   needFromStrain: 3031318.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-17T14:59:42.624Z',
  //     lower: '2022-03-17T04:59:42.624Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 92.0,
  //   projectedSleep: 3.0807904e7,
  //   qualityDuration: 30807904,
  //   remSleepDuration: 7478445,
  //   respiratoryRate: 15.234375,
  //   responded: false,
  //   score: 92,
  //   significant: false,
  //   sleepConsistency: 49.0,
  //   sleepNeed: 3.3376228e7,
  //   slowWaveSleepDuration: 7157892,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 3.7888163e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-17T16:53:29.059Z',
  //   userId: 2051562,
  //   wakeDuration: 7128985,
  // },
  // {
  //   activityId: 401251122,
  //   algoVersion: '5.0.0',
  //   arousalTime: 604663.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-18T13:46:49.871Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 3,
  //   debtPost: 7668000.0,
  //   debtPre: 1444596.0,
  //   disturbances: 5,
  //   during: {
  //     upper: '2022-03-18T12:40:30.898Z',
  //     lower: '2022-03-18T07:22:35.539Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-18T07:34:07.680Z',
  //         lower: '2022-03-18T07:22:35.539Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T07:34:07.680Z',
  //         lower: '2022-03-18T07:22:35.539Z',
  //         bounds: '[)',
  //       },
  //       type: 'latency',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T07:40:53.352Z',
  //         lower: '2022-03-18T07:34:08.642Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T07:53:25.095Z',
  //         lower: '2022-03-18T07:40:54.313Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T07:58:14.457Z',
  //         lower: '2022-03-18T07:53:26.056Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T08:18:32.434Z',
  //         lower: '2022-03-18T07:58:15.418Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T08:32:01.864Z',
  //         lower: '2022-03-18T08:18:33.395Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T08:56:38.442Z',
  //         lower: '2022-03-18T08:32:02.825Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T09:19:18.701Z',
  //         lower: '2022-03-18T08:56:39.403Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T09:11:35.351Z',
  //         lower: '2022-03-18T09:09:40.955Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T09:32:49.092Z',
  //         lower: '2022-03-18T09:19:19.662Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T09:34:45.411Z',
  //         lower: '2022-03-18T09:32:50.054Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T09:42:27.800Z',
  //         lower: '2022-03-18T09:32:50.054Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T09:58:24.310Z',
  //         lower: '2022-03-18T09:42:28.761Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T10:11:24.900Z',
  //         lower: '2022-03-18T09:58:25.271Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T10:27:48.326Z',
  //         lower: '2022-03-18T10:11:25.861Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T10:53:22.581Z',
  //         lower: '2022-03-18T10:27:49.288Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T10:47:34.588Z',
  //         lower: '2022-03-18T10:45:39.231Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T11:29:34.192Z',
  //         lower: '2022-03-18T10:53:23.542Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T11:52:43.291Z',
  //         lower: '2022-03-18T11:29:35.154Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T11:41:38.057Z',
  //         lower: '2022-03-18T11:39:42.700Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T12:04:18.325Z',
  //         lower: '2022-03-18T11:52:44.252Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T12:16:22.189Z',
  //         lower: '2022-03-18T12:04:19.286Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T12:29:23.741Z',
  //         lower: '2022-03-18T12:16:23.151Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T12:31:48.899Z',
  //         lower: '2022-03-18T12:29:24.703Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T12:31:48.899Z',
  //         lower: '2022-03-18T12:29:24.703Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-18T12:38:05.731Z',
  //         lower: '2022-03-18T12:31:49.860Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //   ],
  //   habitualSleepNeed: 2.808937e7,
  //   hrBaseline: null,
  //   id: 401251122,
  //   inSleepEfficiency: 0.95182586,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 692141,
  //   lightSleepDuration: 7534230,
  //   maxHeartRate: null,
  //   needFromStrain: 692379.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-18T15:32:10.255Z',
  //     lower: '2022-03-18T05:47:10.255Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 57.0,
  //   projectedSleep: 1.7359448e7,
  //   qualityDuration: 17359448,
  //   remSleepDuration: 5769773,
  //   respiratoryRate: 16.132812,
  //   responded: false,
  //   score: 57,
  //   significant: false,
  //   sleepConsistency: 52.0,
  //   sleepNeed: 3.0226346e7,
  //   slowWaveSleepDuration: 4055445,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 1.8930192e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-18T13:46:51.138Z',
  //   userId: 2051562,
  //   wakeDuration: 1594064,
  // },
  // {
  //   activityId: 401807590,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1933190.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-19T14:26:18.972Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 6,
  //   debtPost: 5498474.0,
  //   debtPre: 6039139.0,
  //   disturbances: 12,
  //   during: {
  //     upper: '2022-03-19T14:10:00.147Z',
  //     lower: '2022-03-19T05:14:21.485Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-19T05:24:58.833Z',
  //         lower: '2022-03-19T05:14:21.485Z',
  //         bounds: '[)',
  //       },
  //       type: 'latency',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:24:58.833Z',
  //         lower: '2022-03-19T05:14:21.485Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:30:17.987Z',
  //         lower: '2022-03-19T05:24:59.794Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:30:17.987Z',
  //         lower: '2022-03-19T05:27:23.990Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:30:47.787Z',
  //         lower: '2022-03-19T05:30:18.948Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:35:07.340Z',
  //         lower: '2022-03-19T05:30:48.749Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:39:28.816Z',
  //         lower: '2022-03-19T05:35:08.302Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:43:19.530Z',
  //         lower: '2022-03-19T05:39:29.777Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:53:29.008Z',
  //         lower: '2022-03-19T05:43:20.491Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:53:57.847Z',
  //         lower: '2022-03-19T05:53:29.969Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T05:59:16.040Z',
  //         lower: '2022-03-19T05:53:58.809Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:00:13.719Z',
  //         lower: '2022-03-19T05:59:17.001Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:06:28.629Z',
  //         lower: '2022-03-19T06:00:14.680Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:14:11.026Z',
  //         lower: '2022-03-19T06:06:29.590Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:19:01.341Z',
  //         lower: '2022-03-19T06:14:11.988Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:20:27.859Z',
  //         lower: '2022-03-19T06:19:02.303Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:26:16.820Z',
  //         lower: '2022-03-19T06:20:28.820Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:36:24.369Z',
  //         lower: '2022-03-19T06:26:17.781Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:45:06.366Z',
  //         lower: '2022-03-19T06:36:25.330Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:56:41.394Z',
  //         lower: '2022-03-19T06:45:07.327Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T06:56:41.394Z',
  //         lower: '2022-03-19T06:53:47.397Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:03:54.944Z',
  //         lower: '2022-03-19T06:56:42.355Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:28:03.652Z',
  //         lower: '2022-03-19T07:03:55.905Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:08:15.467Z',
  //         lower: '2022-03-19T07:05:23.393Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:20:49.132Z',
  //         lower: '2022-03-19T07:18:54.737Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:37:41.398Z',
  //         lower: '2022-03-19T07:28:04.614Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:55:04.426Z',
  //         lower: '2022-03-19T07:37:42.359Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:56:30.944Z',
  //         lower: '2022-03-19T07:55:05.387Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T07:56:30.944Z',
  //         lower: '2022-03-19T07:55:05.387Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T08:10:58.052Z',
  //         lower: '2022-03-19T07:56:31.905Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T08:22:31.164Z',
  //         lower: '2022-03-19T08:10:59.013Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T08:27:48.395Z',
  //         lower: '2022-03-19T08:22:32.125Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T08:28:46.074Z',
  //         lower: '2022-03-19T08:27:49.356Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T08:32:09.871Z',
  //         lower: '2022-03-19T08:28:47.035Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T08:32:09.871Z',
  //         lower: '2022-03-19T08:28:47.035Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T09:04:00.007Z',
  //         lower: '2022-03-19T08:32:10.832Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T09:08:19.560Z',
  //         lower: '2022-03-19T09:04:00.968Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T09:11:41.434Z',
  //         lower: '2022-03-19T09:08:20.521Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T09:22:17.829Z',
  //         lower: '2022-03-19T09:11:42.396Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T09:48:19.963Z',
  //         lower: '2022-03-19T09:22:18.791Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T09:33:50.932Z',
  //         lower: '2022-03-19T09:31:27.697Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T10:28:24.212Z',
  //         lower: '2022-03-19T09:48:20.925Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T10:44:49.561Z',
  //         lower: '2022-03-19T10:28:25.173Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T11:11:52.257Z',
  //         lower: '2022-03-19T10:44:50.522Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T11:04:07.946Z',
  //         lower: '2022-03-19T11:02:11.628Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T11:08:27.499Z',
  //         lower: '2022-03-19T11:05:35.425Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T11:16:40.650Z',
  //         lower: '2022-03-19T11:11:53.219Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T11:38:24.183Z',
  //         lower: '2022-03-19T11:16:41.611Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T12:04:24.394Z',
  //         lower: '2022-03-19T11:38:25.144Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T12:11:10.075Z',
  //         lower: '2022-03-19T12:04:25.355Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T13:18:20.865Z',
  //         lower: '2022-03-19T12:11:11.036Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T13:03:49.911Z',
  //         lower: '2022-03-19T12:59:58.236Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T13:18:20.865Z',
  //         lower: '2022-03-19T13:14:28.228Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T13:34:16.413Z',
  //         lower: '2022-03-19T13:18:21.826Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T13:36:11.770Z',
  //         lower: '2022-03-19T13:34:17.375Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T13:46:20.287Z',
  //         lower: '2022-03-19T13:34:17.375Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T13:59:52.592Z',
  //         lower: '2022-03-19T13:46:21.248Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T14:06:37.312Z',
  //         lower: '2022-03-19T13:59:53.553Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-19T14:09:30.347Z',
  //         lower: '2022-03-19T14:06:38.273Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //   ],
  //   habitualSleepNeed: 2.808902e7,
  //   hrBaseline: null,
  //   id: 401807590,
  //   inSleepEfficiency: 0.756155,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 637348,
  //   lightSleepDuration: 11162289,
  //   maxHeartRate: null,
  //   needFromStrain: 666132.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-19T16:40:30.898Z',
  //     lower: '2022-03-19T06:10:30.898Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 68.0,
  //   projectedSleep: 2.3797344e7,
  //   qualityDuration: 23797344,
  //   remSleepDuration: 5012227,
  //   respiratoryRate: 15.761719,
  //   responded: false,
  //   score: 68,
  //   significant: false,
  //   sleepConsistency: 58.0,
  //   sleepNeed: 3.4794292e7,
  //   slowWaveSleepDuration: 7622828,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 3.2108862e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-19T14:26:20.972Z',
  //   userId: 2051562,
  //   wakeDuration: 8353439,
  // },
  // {
  //   activityId: 402296701,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1261238.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-20T13:18:11.550Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 3,
  //   debtPost: 7668000.0,
  //   debtPre: 5778240.0,
  //   disturbances: 11,
  //   during: {
  //     upper: '2022-03-20T13:10:30.147Z',
  //     lower: '2022-03-20T07:06:37.819Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-20T07:08:03.376Z',
  //         lower: '2022-03-20T07:06:37.819Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T07:08:03.376Z',
  //         lower: '2022-03-20T07:06:37.819Z',
  //         bounds: '[)',
  //       },
  //       type: 'latency',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T07:28:16.546Z',
  //         lower: '2022-03-20T07:08:04.337Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T08:05:22.952Z',
  //         lower: '2022-03-20T07:28:17.507Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T08:07:47.148Z',
  //         lower: '2022-03-20T08:05:23.913Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T08:07:47.148Z',
  //         lower: '2022-03-20T08:05:23.913Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T08:23:12.879Z',
  //         lower: '2022-03-20T08:07:48.109Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T08:29:00.873Z',
  //         lower: '2022-03-20T08:23:13.841Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T08:39:08.428Z',
  //         lower: '2022-03-20T08:29:01.834Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T09:20:03.626Z',
  //         lower: '2022-03-20T08:39:09.389Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T09:04:09.038Z',
  //         lower: '2022-03-20T09:02:14.643Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T09:14:46.385Z',
  //         lower: '2022-03-20T09:12:22.189Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T09:29:11.571Z',
  //         lower: '2022-03-20T09:20:04.587Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T09:49:24.741Z',
  //         lower: '2022-03-20T09:29:12.532Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T10:28:29.346Z',
  //         lower: '2022-03-20T09:49:25.703Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T09:52:17.777Z',
  //         lower: '2022-03-20T09:50:23.381Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T10:44:21.049Z',
  //         lower: '2022-03-20T10:28:30.307Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T10:46:16.406Z',
  //         lower: '2022-03-20T10:44:22.010Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T10:46:16.406Z',
  //         lower: '2022-03-20T10:44:22.010Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T10:50:08.081Z',
  //         lower: '2022-03-20T10:46:17.367Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T10:51:35.560Z',
  //         lower: '2022-03-20T10:50:09.042Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T10:51:35.560Z',
  //         lower: '2022-03-20T10:50:09.042Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T11:15:43.298Z',
  //         lower: '2022-03-20T10:51:36.521Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T11:17:38.655Z',
  //         lower: '2022-03-20T11:15:44.260Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T11:17:38.655Z',
  //         lower: '2022-03-20T11:15:44.260Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T11:36:28.201Z',
  //         lower: '2022-03-20T11:17:39.617Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T11:54:47.946Z',
  //         lower: '2022-03-20T11:36:29.162Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T12:26:37.107Z',
  //         lower: '2022-03-20T11:54:48.907Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T12:43:01.495Z',
  //         lower: '2022-03-20T12:26:38.069Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T12:29:01.303Z',
  //         lower: '2022-03-20T12:27:06.908Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T12:40:35.377Z',
  //         lower: '2022-03-20T12:39:09.818Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T12:49:16.405Z',
  //         lower: '2022-03-20T12:43:02.457Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T12:51:12.724Z',
  //         lower: '2022-03-20T12:49:17.367Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T12:51:12.724Z',
  //         lower: '2022-03-20T12:49:17.367Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T13:00:51.440Z',
  //         lower: '2022-03-20T12:51:13.685Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T13:02:46.797Z',
  //         lower: '2022-03-20T13:00:52.401Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T13:02:46.797Z',
  //         lower: '2022-03-20T13:00:52.401Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-20T13:10:58.025Z',
  //         lower: '2022-03-20T13:02:47.758Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //   ],
  //   habitualSleepNeed: 2.808867e7,
  //   hrBaseline: null,
  //   id: 402296701,
  //   inSleepEfficiency: 0.91756296,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 85557,
  //   lightSleepDuration: 7876907,
  //   maxHeartRate: null,
  //   needFromStrain: 231362.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-20T14:55:00.147Z',
  //     lower: '2022-03-20T05:25:00.147Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 59.0,
  //   projectedSleep: 1.9979612e7,
  //   qualityDuration: 19979611,
  //   remSleepDuration: 7353235,
  //   respiratoryRate: 15.761719,
  //   responded: false,
  //   score: 59,
  //   significant: false,
  //   sleepConsistency: 68.0,
  //   sleepNeed: 3.4098274e7,
  //   slowWaveSleepDuration: 4749469,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 2.1860206e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-20T13:18:13.821Z',
  //   userId: 2051562,
  //   wakeDuration: 1908837,
  // },
  // {
  //   activityId: 402966595,
  //   algoVersion: '5.0.0',
  //   arousalTime: 575833.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-21T15:15:25.570Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 1,
  //   debtPost: 7668000.0,
  //   debtPre: 5758105.0,
  //   disturbances: 4,
  //   during: {
  //     upper: '2022-03-21T13:04:14.075Z',
  //     lower: '2022-03-21T10:11:36.877Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-21T10:13:31.272Z',
  //         lower: '2022-03-21T10:11:36.877Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T10:13:31.272Z',
  //         lower: '2022-03-21T10:11:36.877Z',
  //         bounds: '[)',
  //       },
  //       type: 'latency',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T10:25:35.137Z',
  //         lower: '2022-03-21T10:13:32.233Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T10:41:01.838Z',
  //         lower: '2022-03-21T10:25:36.099Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T10:46:20.039Z',
  //         lower: '2022-03-21T10:41:02.799Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T10:50:40.553Z',
  //         lower: '2022-03-21T10:46:21.000Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:07:32.819Z',
  //         lower: '2022-03-21T10:50:41.515Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:07:03.980Z',
  //         lower: '2022-03-21T11:04:40.745Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:09:57.977Z',
  //         lower: '2022-03-21T11:07:33.781Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:31:39.596Z',
  //         lower: '2022-03-21T11:09:58.938Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:22:30.681Z',
  //         lower: '2022-03-21T11:20:36.285Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:37:27.590Z',
  //         lower: '2022-03-21T11:31:40.558Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:42:47.714Z',
  //         lower: '2022-03-21T11:37:28.551Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:42:47.714Z',
  //         lower: '2022-03-21T11:39:52.747Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T11:58:41.331Z',
  //         lower: '2022-03-21T11:42:48.675Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:03:00.893Z',
  //         lower: '2022-03-21T11:58:42.292Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:17:29.915Z',
  //         lower: '2022-03-21T12:03:01.854Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:27:07.670Z',
  //         lower: '2022-03-21T12:17:30.876Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:31:57.023Z',
  //         lower: '2022-03-21T12:27:08.631Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:35:47.737Z',
  //         lower: '2022-03-21T12:31:57.985Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:38:41.734Z',
  //         lower: '2022-03-21T12:35:48.698Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:41:05.939Z',
  //         lower: '2022-03-21T12:38:42.695Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:43:30.135Z',
  //         lower: '2022-03-21T12:41:06.900Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:46:52.971Z',
  //         lower: '2022-03-21T12:41:06.900Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T12:59:23.760Z',
  //         lower: '2022-03-21T12:46:53.932Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-21T13:04:13.114Z',
  //         lower: '2022-03-21T12:59:24.722Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8088321e7,
  //   hrBaseline: null,
  //   id: 402966595,
  //   inSleepEfficiency: 0.89371794,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 114395,
  //   lightSleepDuration: 5070929,
  //   maxHeartRate: null,
  //   needFromStrain: 3232662.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-21T15:55:30.147Z',
  //     lower: '2022-03-21T05:25:30.147Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 25.0,
  //   projectedSleep: 9153318.0,
  //   qualityDuration: 9153318,
  //   remSleepDuration: 1621026,
  //   respiratoryRate: 16.611328,
  //   responded: false,
  //   score: 25,
  //   significant: false,
  //   sleepConsistency: 50.0,
  //   sleepNeed: 3.707909e7,
  //   slowWaveSleepDuration: 2461363,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 1.0356237e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-21T15:15:27.051Z',
  //   userId: 2051562,
  //   wakeDuration: 1216737,
  // },
  // {
  //   activityId: 403524409,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1951462.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-22T13:39:24.952Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 9,
  //   debtPost: 4593350.0,
  //   debtPre: 1.0532989e7,
  //   disturbances: 17,
  //   during: {
  //     upper: '2022-03-22T14:28:38.216Z',
  //     lower: '2022-03-22T04:54:43.910Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-22T05:01:56.482Z',
  //         lower: '2022-03-22T04:54:43.910Z',
  //         bounds: '[)',
  //       },
  //       type: 'latency',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T05:01:56.482Z',
  //         lower: '2022-03-22T04:54:43.910Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T05:08:13.314Z',
  //         lower: '2022-03-22T05:01:57.443Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T05:29:27.056Z',
  //         lower: '2022-03-22T05:08:14.276Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T05:31:53.174Z',
  //         lower: '2022-03-22T05:29:28.017Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T05:33:19.692Z',
  //         lower: '2022-03-22T05:29:28.017Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T05:42:00.721Z',
  //         lower: '2022-03-22T05:33:20.653Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T06:00:21.427Z',
  //         lower: '2022-03-22T05:42:01.682Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T06:17:45.416Z',
  //         lower: '2022-03-22T06:00:22.388Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T06:26:54.331Z',
  //         lower: '2022-03-22T06:17:46.377Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T06:49:35.552Z',
  //         lower: '2022-03-22T06:26:55.293Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T06:52:28.587Z',
  //         lower: '2022-03-22T06:49:36.513Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T06:51:30.908Z',
  //         lower: '2022-03-22T06:50:05.352Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T06:55:21.623Z',
  //         lower: '2022-03-22T06:52:29.549Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T07:43:04.423Z',
  //         lower: '2022-03-22T06:55:22.584Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T07:10:46.409Z',
  //         lower: '2022-03-22T07:08:52.014Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:08:07.917Z',
  //         lower: '2022-03-22T07:43:05.385Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:10:03.274Z',
  //         lower: '2022-03-22T08:08:08.878Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:28:23.980Z',
  //         lower: '2022-03-22T08:08:08.878Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:20:10.829Z',
  //         lower: '2022-03-22T08:17:46.624Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:39:58.053Z',
  //         lower: '2022-03-22T08:28:24.941Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:41:53.410Z',
  //         lower: '2022-03-22T08:39:59.014Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:42:22.249Z',
  //         lower: '2022-03-22T08:39:59.014Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T08:55:52.632Z',
  //         lower: '2022-03-22T08:42:23.210Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:18:34.822Z',
  //         lower: '2022-03-22T08:55:53.593Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:12:46.820Z',
  //         lower: '2022-03-22T09:11:21.263Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:22:25.536Z',
  //         lower: '2022-03-22T09:18:35.783Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:24:20.893Z',
  //         lower: '2022-03-22T09:22:26.497Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:24:20.893Z',
  //         lower: '2022-03-22T09:22:26.497Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:31:36.365Z',
  //         lower: '2022-03-22T09:24:21.854Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:40:17.403Z',
  //         lower: '2022-03-22T09:31:37.327Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:51:51.467Z',
  //         lower: '2022-03-22T09:40:18.364Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:53:47.785Z',
  //         lower: '2022-03-22T09:51:52.428Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T09:53:47.785Z',
  //         lower: '2022-03-22T09:51:52.428Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T10:00:04.627Z',
  //         lower: '2022-03-22T09:53:48.747Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T10:09:13.534Z',
  //         lower: '2022-03-22T10:00:05.588Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T10:43:57.667Z',
  //         lower: '2022-03-22T10:09:14.495Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T10:45:53.023Z',
  //         lower: '2022-03-22T10:43:58.628Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:26:25.149Z',
  //         lower: '2022-03-22T10:43:58.628Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:27:22.828Z',
  //         lower: '2022-03-22T11:26:26.111Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:28:50.307Z',
  //         lower: '2022-03-22T11:27:23.789Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:28:50.307Z',
  //         lower: '2022-03-22T11:27:23.789Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:29:20.107Z',
  //         lower: '2022-03-22T11:28:51.268Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:30:47.586Z',
  //         lower: '2022-03-22T11:29:21.069Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:37:02.505Z',
  //         lower: '2022-03-22T11:30:48.548Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:38:01.145Z',
  //         lower: '2022-03-22T11:37:03.467Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:41:52.820Z',
  //         lower: '2022-03-22T11:38:02.106Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:43:48.177Z',
  //         lower: '2022-03-22T11:41:53.782Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:43:48.177Z',
  //         lower: '2022-03-22T11:41:53.782Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:47:10.052Z',
  //         lower: '2022-03-22T11:43:49.139Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:20:26.688Z',
  //         lower: '2022-03-22T11:47:11.013Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T11:56:20.881Z',
  //         lower: '2022-03-22T11:54:26.486Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:14:10.816Z',
  //         lower: '2022-03-22T12:12:16.421Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:24:17.402Z',
  //         lower: '2022-03-22T12:20:27.649Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:27:11.398Z',
  //         lower: '2022-03-22T12:24:18.363Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:27:11.398Z',
  //         lower: '2022-03-22T12:24:18.363Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:34:25.918Z',
  //         lower: '2022-03-22T12:27:12.360Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:36:21.275Z',
  //         lower: '2022-03-22T12:34:26.879Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T13:11:47.771Z',
  //         lower: '2022-03-22T12:34:26.879Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T12:51:19.145Z',
  //         lower: '2022-03-22T12:49:52.627Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T13:26:17.755Z',
  //         lower: '2022-03-22T13:11:48.733Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T13:31:08.070Z',
  //         lower: '2022-03-22T13:26:18.716Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T13:34:59.738Z',
  //         lower: '2022-03-22T13:31:09.031Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T13:52:50.637Z',
  //         lower: '2022-03-22T13:35:00.699Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T13:57:10.199Z',
  //         lower: '2022-03-22T13:52:51.598Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T14:01:30.713Z',
  //         lower: '2022-03-22T13:57:11.160Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T14:20:25.065Z',
  //         lower: '2022-03-22T14:01:31.675Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-22T14:28:37.255Z',
  //         lower: '2022-03-22T14:20:26.026Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8087972e7,
  //   hrBaseline: null,
  //   id: 403524409,
  //   inSleepEfficiency: 0.8851721,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 432572,
  //   lightSleepDuration: 14010558,
  //   maxHeartRate: null,
  //   needFromStrain: 662275.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-22T16:49:14.075Z',
  //     lower: '2022-03-22T04:19:14.075Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 77.0,
  //   projectedSleep: 3.0096536e7,
  //   qualityDuration: 30096537,
  //   remSleepDuration: 8695150,
  //   respiratoryRate: 15.46875,
  //   responded: false,
  //   score: 77,
  //   significant: false,
  //   sleepConsistency: 53.0,
  //   sleepNeed: 3.9283237e7,
  //   slowWaveSleepDuration: 7390829,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 3.4433345e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-22T14:38:32.728Z',
  //   userId: 2051562,
  //   wakeDuration: 4375972,
  // },
  // {
  //   activityId: 404127512,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1383334.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-23T13:37:18.354Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 4,
  //   debtPost: 7668000.0,
  //   debtPre: 4152955.0,
  //   disturbances: 10,
  //   during: {
  //     upper: '2022-03-23T13:28:43.028Z',
  //     lower: '2022-03-23T08:25:34.962Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-23T08:30:22.393Z',
  //         lower: '2022-03-23T08:25:34.962Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T08:56:03.369Z',
  //         lower: '2022-03-23T08:30:23.354Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:10:33.365Z',
  //         lower: '2022-03-23T08:56:04.331Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:00:24.845Z',
  //         lower: '2022-03-23T08:58:30.449Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:17:19.999Z',
  //         lower: '2022-03-23T09:10:34.327Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:19:15.355Z',
  //         lower: '2022-03-23T09:17:20.960Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:34:13.232Z',
  //         lower: '2022-03-23T09:17:20.960Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:25:32.201Z',
  //         lower: '2022-03-23T09:23:07.992Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:40:00.261Z',
  //         lower: '2022-03-23T09:34:14.193Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:42:53.305Z',
  //         lower: '2022-03-23T09:40:01.223Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T09:49:10.142Z',
  //         lower: '2022-03-23T09:42:54.266Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T10:06:03.373Z',
  //         lower: '2022-03-23T09:49:11.103Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T10:08:00.653Z',
  //         lower: '2022-03-23T10:06:04.334Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T10:08:00.653Z',
  //         lower: '2022-03-23T10:06:04.334Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T10:16:13.803Z',
  //         lower: '2022-03-23T10:08:01.614Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T10:20:35.279Z',
  //         lower: '2022-03-23T10:16:14.765Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T10:30:41.877Z',
  //         lower: '2022-03-23T10:20:36.240Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T10:33:08.957Z',
  //         lower: '2022-03-23T10:30:42.838Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T11:04:58.139Z',
  //         lower: '2022-03-23T10:30:42.838Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T11:28:06.280Z',
  //         lower: '2022-03-23T11:04:59.100Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T11:34:50.990Z',
  //         lower: '2022-03-23T11:28:07.241Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T12:02:17.735Z',
  //         lower: '2022-03-23T11:34:51.952Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T11:52:10.176Z',
  //         lower: '2022-03-23T11:50:15.781Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T12:07:08.050Z',
  //         lower: '2022-03-23T12:02:18.697Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T12:44:17.323Z',
  //         lower: '2022-03-23T12:07:09.011Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T12:12:55.082Z',
  //         lower: '2022-03-23T12:11:00.687Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T12:25:26.825Z',
  //         lower: '2022-03-23T12:22:33.790Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T12:42:50.805Z',
  //         lower: '2022-03-23T12:38:59.130Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T12:51:31.833Z',
  //         lower: '2022-03-23T12:44:18.284Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T13:00:12.862Z',
  //         lower: '2022-03-23T12:51:32.795Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T13:26:16.910Z',
  //         lower: '2022-03-23T13:00:13.823Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-23T13:07:57.174Z',
  //         lower: '2022-03-23T13:06:02.778Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8087622e7,
  //   hrBaseline: null,
  //   id: 404127512,
  //   inSleepEfficiency: 0.86272156,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 0,
  //   lightSleepDuration: 8836635,
  //   maxHeartRate: null,
  //   needFromStrain: 1451717.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-23T14:28:38.216Z',
  //     lower: '2022-03-23T04:58:38.216Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 46.0,
  //   projectedSleep: 1.5565178e7,
  //   qualityDuration: 15565178,
  //   remSleepDuration: 4172862,
  //   respiratoryRate: 15.761719,
  //   responded: false,
  //   score: 46,
  //   significant: false,
  //   sleepConsistency: 61.0,
  //   sleepNeed: 3.3692296e7,
  //   slowWaveSleepDuration: 2555681,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 1.8041948e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-23T13:37:49.837Z',
  //   userId: 2051562,
  //   wakeDuration: 2497940,
  // },
  // {
  //   activityId: 404697770,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1760153.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-24T13:19:55.323Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 5,
  //   debtPost: 7025272.0,
  //   debtPre: 7583563.0,
  //   disturbances: 12,
  //   during: {
  //     upper: '2022-03-24T13:05:31.533Z',
  //     lower: '2022-03-24T05:47:39.679Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-24T05:50:32.715Z',
  //         lower: '2022-03-24T05:47:39.679Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T05:50:32.715Z',
  //         lower: '2022-03-24T05:47:39.679Z',
  //         bounds: '[)',
  //       },
  //       type: 'latency',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:02:36.579Z',
  //         lower: '2022-03-24T05:50:33.676Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:16:34.840Z',
  //         lower: '2022-03-24T06:02:37.541Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:20:57.289Z',
  //         lower: '2022-03-24T06:16:35.801Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:34:58.433Z',
  //         lower: '2022-03-24T06:20:58.250Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:31:34.636Z',
  //         lower: '2022-03-24T06:29:10.440Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:39:19.917Z',
  //         lower: '2022-03-24T06:34:59.395Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:45:07.915Z',
  //         lower: '2022-03-24T06:39:20.878Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T06:45:07.915Z',
  //         lower: '2022-03-24T06:42:43.719Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T07:09:19.502Z',
  //         lower: '2022-03-24T06:45:09.837Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T07:22:22.980Z',
  //         lower: '2022-03-24T07:09:20.463Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T07:37:51.616Z',
  //         lower: '2022-03-24T07:22:23.942Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T07:39:47.934Z',
  //         lower: '2022-03-24T07:37:52.577Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T07:42:40.970Z',
  //         lower: '2022-03-24T07:37:52.577Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T07:52:18.716Z',
  //         lower: '2022-03-24T07:42:41.931Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T07:56:10.391Z',
  //         lower: '2022-03-24T07:52:19.677Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T08:04:23.554Z',
  //         lower: '2022-03-24T07:56:11.352Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T08:20:46.984Z',
  //         lower: '2022-03-24T08:04:24.515Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T08:25:35.377Z',
  //         lower: '2022-03-24T08:20:47.946Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T08:30:55.492Z',
  //         lower: '2022-03-24T08:25:36.338Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T08:30:55.492Z',
  //         lower: '2022-03-24T08:28:30.335Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T09:01:45.073Z',
  //         lower: '2022-03-24T08:30:56.453Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T09:06:05.588Z',
  //         lower: '2022-03-24T09:01:46.035Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T09:23:58.420Z',
  //         lower: '2022-03-24T09:06:06.549Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T09:26:22.616Z',
  //         lower: '2022-03-24T09:23:59.381Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T09:33:07.339Z',
  //         lower: '2022-03-24T09:23:59.381Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T09:44:14.487Z',
  //         lower: '2022-03-24T09:33:08.301Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T09:52:00.729Z',
  //         lower: '2022-03-24T09:44:15.448Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:03:36.720Z',
  //         lower: '2022-03-24T09:52:01.690Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:03:36.720Z',
  //         lower: '2022-03-24T10:01:11.563Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:13:44.279Z',
  //         lower: '2022-03-24T10:03:37.682Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:20:59.751Z',
  //         lower: '2022-03-24T10:13:45.240Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:21:57.430Z',
  //         lower: '2022-03-24T10:21:00.713Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:23:53.748Z',
  //         lower: '2022-03-24T10:21:58.391Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:23:53.748Z',
  //         lower: '2022-03-24T10:21:58.391Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:31:36.150Z',
  //         lower: '2022-03-24T10:23:54.709Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:33:32.468Z',
  //         lower: '2022-03-24T10:31:37.111Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:52:22.978Z',
  //         lower: '2022-03-24T10:31:37.111Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T10:44:10.776Z',
  //         lower: '2022-03-24T10:40:47.940Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T11:05:53.360Z',
  //         lower: '2022-03-24T10:52:23.939Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T11:22:46.591Z',
  //         lower: '2022-03-24T11:05:54.322Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T11:22:46.591Z',
  //         lower: '2022-03-24T11:21:20.073Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T11:41:36.140Z',
  //         lower: '2022-03-24T11:22:47.552Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T11:44:58.976Z',
  //         lower: '2022-03-24T11:41:37.102Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T12:03:46.602Z',
  //         lower: '2022-03-24T11:41:37.102Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T12:03:17.763Z',
  //         lower: '2022-03-24T11:59:56.850Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T12:13:53.200Z',
  //         lower: '2022-03-24T12:03:47.564Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T12:57:18.369Z',
  //         lower: '2022-03-24T12:13:54.161Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-24T13:00:11.405Z',
  //         lower: '2022-03-24T12:57:19.331Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8087273e7,
  //   hrBaseline: null,
  //   id: 404697770,
  //   inSleepEfficiency: 0.85118675,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 173036,
  //   lightSleepDuration: 8578661,
  //   maxHeartRate: null,
  //   needFromStrain: 322185.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-24T15:13:43.028Z',
  //     lower: '2022-03-24T04:28:43.028Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 61.0,
  //   projectedSleep: 2.194248e7,
  //   qualityDuration: 21942479,
  //   remSleepDuration: 5824737,
  //   respiratoryRate: 15.46875,
  //   responded: false,
  //   score: 61,
  //   significant: false,
  //   sleepConsistency: 67.0,
  //   sleepNeed: 3.5993023e7,
  //   slowWaveSleepDuration: 7539081,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 2.5951726e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-24T13:19:57.084Z',
  //   userId: 2051562,
  //   wakeDuration: 4037122,
  // },
  // {
  //   activityId: 405325866,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1752494.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-25T14:59:18.738Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 6,
  //   debtPost: 2720066.0,
  //   debtPre: 7041793.0,
  //   disturbances: 14,
  //   during: {
  //     upper: '2022-03-25T14:48:40.077Z',
  //     lower: '2022-03-25T05:25:47.105Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-25T05:30:06.658Z',
  //         lower: '2022-03-25T05:25:47.105Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T05:30:06.658Z',
  //         lower: '2022-03-25T05:25:47.105Z',
  //         bounds: '[)',
  //       },
  //       type: 'latency',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T05:55:41.866Z',
  //         lower: '2022-03-25T05:30:07.619Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T05:32:30.854Z',
  //         lower: '2022-03-25T05:31:05.298Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T05:42:10.523Z',
  //         lower: '2022-03-25T05:40:16.127Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T06:03:55.991Z',
  //         lower: '2022-03-25T05:55:42.828Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T06:05:51.348Z',
  //         lower: '2022-03-25T06:03:56.953Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T06:21:47.862Z',
  //         lower: '2022-03-25T06:03:56.953Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T06:16:59.469Z',
  //         lower: '2022-03-25T06:15:04.100Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T06:34:48.429Z',
  //         lower: '2022-03-25T06:21:48.823Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T06:39:39.718Z',
  //         lower: '2022-03-25T06:34:49.390Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T07:00:22.689Z',
  //         lower: '2022-03-25T06:39:40.679Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T07:53:35.230Z',
  //         lower: '2022-03-25T07:00:23.650Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T07:07:37.200Z',
  //         lower: '2022-03-25T07:05:42.804Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T07:46:46.661Z',
  //         lower: '2022-03-25T07:44:22.465Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T07:58:52.461Z',
  //         lower: '2022-03-25T07:53:36.191Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T08:19:10.451Z',
  //         lower: '2022-03-25T07:58:53.422Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T08:01:47.419Z',
  //         lower: '2022-03-25T07:59:22.262Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T08:17:43.933Z',
  //         lower: '2022-03-25T08:15:49.537Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T08:47:10.837Z',
  //         lower: '2022-03-25T08:19:11.412Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T09:03:34.260Z',
  //         lower: '2022-03-25T08:47:11.799Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T09:42:37.952Z',
  //         lower: '2022-03-25T09:03:35.221Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T09:56:07.386Z',
  //         lower: '2022-03-25T09:42:38.913Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T10:06:47.629Z',
  //         lower: '2022-03-25T09:56:08.347Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T11:01:19.945Z',
  //         lower: '2022-03-25T10:06:48.591Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T10:26:07.940Z',
  //         lower: '2022-03-25T10:23:15.861Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T10:55:32.913Z',
  //         lower: '2022-03-25T10:53:37.556Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T11:02:48.398Z',
  //         lower: '2022-03-25T11:01:20.907Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T11:07:36.791Z',
  //         lower: '2022-03-25T11:02:49.360Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T11:32:18.178Z',
  //         lower: '2022-03-25T11:07:37.752Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T11:36:40.615Z',
  //         lower: '2022-03-25T11:32:19.139Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T11:36:40.615Z',
  //         lower: '2022-03-25T11:34:45.258Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T12:08:36.526Z',
  //         lower: '2022-03-25T11:36:41.576Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T12:22:35.760Z',
  //         lower: '2022-03-25T12:08:37.488Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T12:28:51.632Z',
  //         lower: '2022-03-25T12:22:36.722Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T12:48:10.969Z',
  //         lower: '2022-03-25T12:28:52.593Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T12:32:42.345Z',
  //         lower: '2022-03-25T12:29:50.271Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:15:42.508Z',
  //         lower: '2022-03-25T12:48:11.941Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:23:54.697Z',
  //         lower: '2022-03-25T13:15:43.469Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:38:50.648Z',
  //         lower: '2022-03-25T13:23:55.658Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:50:23.764Z',
  //         lower: '2022-03-25T13:38:51.609Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:45:35.372Z',
  //         lower: '2022-03-25T13:43:40.002Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:50:52.603Z',
  //         lower: '2022-03-25T13:50:24.725Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:52:47.960Z',
  //         lower: '2022-03-25T13:50:53.564Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:52:47.960Z',
  //         lower: '2022-03-25T13:50:53.564Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T13:59:02.870Z',
  //         lower: '2022-03-25T13:52:48.921Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T14:10:09.069Z',
  //         lower: '2022-03-25T13:59:03.831Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T14:44:48.402Z',
  //         lower: '2022-03-25T14:10:10.030Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-25T14:48:39.116Z',
  //         lower: '2022-03-25T14:44:49.364Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8086924e7,
  //   hrBaseline: null,
  //   id: 405325866,
  //   inSleepEfficiency: 0.9310474,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 259553,
  //   lightSleepDuration: 14791267,
  //   maxHeartRate: null,
  //   needFromStrain: 304184.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-25T15:20:31.533Z',
  //     lower: '2022-03-25T04:35:31.533Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 88.0,
  //   projectedSleep: 3.1201688e7,
  //   qualityDuration: 31201687,
  //   remSleepDuration: 8035795,
  //   respiratoryRate: 14.326172,
  //   responded: false,
  //   score: 88,
  //   significant: false,
  //   sleepConsistency: 67.0,
  //   sleepNeed: 3.5432901e7,
  //   slowWaveSleepDuration: 8374625,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 3.3772011e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-25T14:59:20.316Z',
  //   userId: 2051562,
  //   wakeDuration: 2609627,
  // },
  // {
  //   activityId: 405801435,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1531400.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-26T13:20:21.404Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 3,
  //   debtPost: 6630969.0,
  //   debtPre: 2166678.0,
  //   disturbances: 11,
  //   during: {
  //     upper: '2022-03-26T13:05:06.603Z',
  //     lower: '2022-03-26T06:57:32.090Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-26T07:19:15.623Z',
  //         lower: '2022-03-26T06:57:32.090Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T07:07:40.597Z',
  //         lower: '2022-03-26T07:05:15.440Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T07:36:38.641Z',
  //         lower: '2022-03-26T07:19:16.584Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T07:45:19.683Z',
  //         lower: '2022-03-26T07:36:39.603Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T07:40:59.156Z',
  //         lower: '2022-03-26T07:38:06.120Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T07:54:58.390Z',
  //         lower: '2022-03-26T07:45:20.644Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:11:43.089Z',
  //         lower: '2022-03-26T07:54:59.351Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T08:37:51.835Z',
  //         lower: '2022-03-26T08:34:29.000Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T08:58:34.817Z',
  //         lower: '2022-03-26T08:55:41.769Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:25:40.401Z',
  //         lower: '2022-03-26T09:11:44.051Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:32:26.073Z',
  //         lower: '2022-03-26T09:25:41.362Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:32:26.073Z',
  //         lower: '2022-03-26T09:30:29.755Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:48:18.741Z',
  //         lower: '2022-03-26T09:32:27.034Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:50:16.021Z',
  //         lower: '2022-03-26T09:48:19.703Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:50:16.021Z',
  //         lower: '2022-03-26T09:48:19.703Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:52:40.217Z',
  //         lower: '2022-03-26T09:50:16.982Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:02:46.815Z',
  //         lower: '2022-03-26T09:52:41.178Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T09:55:34.214Z',
  //         lower: '2022-03-26T09:53:38.857Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:14:49.718Z',
  //         lower: '2022-03-26T10:02:47.776Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:17:42.766Z',
  //         lower: '2022-03-26T10:14:50.679Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:17:42.766Z',
  //         lower: '2022-03-26T10:14:50.679Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:23:28.837Z',
  //         lower: '2022-03-26T10:17:43.728Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:37:55.936Z',
  //         lower: '2022-03-26T10:23:29.798Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:48:04.444Z',
  //         lower: '2022-03-26T10:37:56.897Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T11:13:37.754Z',
  //         lower: '2022-03-26T10:48:05.405Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T10:58:40.842Z',
  //         lower: '2022-03-26T10:56:45.485Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T11:19:53.626Z',
  //         lower: '2022-03-26T11:13:38.716Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T11:20:51.304Z',
  //         lower: '2022-03-26T11:19:54.587Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:00:26.720Z',
  //         lower: '2022-03-26T11:20:52.265Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:08:38.922Z',
  //         lower: '2022-03-26T12:00:27.682Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:25:31.179Z',
  //         lower: '2022-03-26T12:08:39.884Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:45:46.293Z',
  //         lower: '2022-03-26T12:25:32.140Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:27:27.510Z',
  //         lower: '2022-03-26T12:26:00.980Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:55:53.844Z',
  //         lower: '2022-03-26T12:45:47.254Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:57:50.162Z',
  //         lower: '2022-03-26T12:55:54.805Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T12:57:50.162Z',
  //         lower: '2022-03-26T12:55:54.805Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-26T13:05:34.486Z',
  //         lower: '2022-03-26T12:57:51.123Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8086575e7,
  //   hrBaseline: null,
  //   id: 405801435,
  //   inSleepEfficiency: 0.9142383,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 0,
  //   lightSleepDuration: 10485613,
  //   maxHeartRate: null,
  //   needFromStrain: 250159.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-26T14:33:40.077Z',
  //     lower: '2022-03-26T05:33:40.077Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 66.0,
  //   projectedSleep: 2.0188572e7,
  //   qualityDuration: 20188572,
  //   remSleepDuration: 6198153,
  //   respiratoryRate: 15.761719,
  //   responded: false,
  //   score: 66,
  //   significant: false,
  //   sleepConsistency: 69.0,
  //   sleepNeed: 3.0503413e7,
  //   slowWaveSleepDuration: 3504806,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 2.2082396e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-26T13:20:53.242Z',
  //   userId: 2051562,
  //   wakeDuration: 1919440,
  // },
  // {
  //   activityId: 406299900,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1809169.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-27T12:16:20.912Z',
  //   creditFromNaps: 0.0,
  //   cyclesCount: 4,
  //   debtPost: 7668000.0,
  //   debtPre: 6138846.0,
  //   disturbances: 12,
  //   during: {
  //     upper: '2022-03-27T14:00:05.153Z',
  //     lower: '2022-03-27T05:57:15.967Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-27T06:02:03.398Z',
  //         lower: '2022-03-27T05:57:15.967Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T06:51:12.715Z',
  //         lower: '2022-03-27T06:02:04.359Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T06:53:36.896Z',
  //         lower: '2022-03-27T06:51:13.676Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T06:56:29.932Z',
  //         lower: '2022-03-27T06:51:13.676Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:17:48.469Z',
  //         lower: '2022-03-27T06:56:30.893Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:21:10.329Z',
  //         lower: '2022-03-27T07:17:49.430Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:22:38.782Z',
  //         lower: '2022-03-27T07:17:49.430Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:33:15.167Z',
  //         lower: '2022-03-27T07:22:39.743Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:36:08.203Z',
  //         lower: '2022-03-27T07:33:16.129Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:36:08.203Z',
  //         lower: '2022-03-27T07:33:16.129Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:41:27.369Z',
  //         lower: '2022-03-27T07:36:09.164Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:45:18.083Z',
  //         lower: '2022-03-27T07:41:28.331Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:45:18.083Z',
  //         lower: '2022-03-27T07:43:23.688Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:46:16.723Z',
  //         lower: '2022-03-27T07:45:19.044Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:51:05.115Z',
  //         lower: '2022-03-27T07:46:17.684Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:50:36.276Z',
  //         lower: '2022-03-27T07:48:13.041Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T07:53:00.472Z',
  //         lower: '2022-03-27T07:51:06.077Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T08:23:51.015Z',
  //         lower: '2022-03-27T07:53:01.434Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T08:00:41.912Z',
  //         lower: '2022-03-27T07:58:18.665Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T08:20:57.979Z',
  //         lower: '2022-03-27T08:19:03.579Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T08:35:53.918Z',
  //         lower: '2022-03-27T08:23:51.976Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T08:56:11.895Z',
  //         lower: '2022-03-27T08:35:54.879Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T08:58:37.052Z',
  //         lower: '2022-03-27T08:56:13.818Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T08:59:05.892Z',
  //         lower: '2022-03-27T08:58:38.014Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T09:16:27.949Z',
  //         lower: '2022-03-27T08:59:06.853Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T09:20:19.624Z',
  //         lower: '2022-03-27T09:16:28.910Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T09:38:10.533Z',
  //         lower: '2022-03-27T09:16:28.910Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T09:25:36.868Z',
  //         lower: '2022-03-27T09:23:13.633Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T09:55:31.641Z',
  //         lower: '2022-03-27T09:38:11.494Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T09:57:26.998Z',
  //         lower: '2022-03-27T09:55:32.602Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T10:02:44.242Z',
  //         lower: '2022-03-27T09:55:32.602Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T10:18:10.942Z',
  //         lower: '2022-03-27T10:02:45.203Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T10:52:26.243Z',
  //         lower: '2022-03-27T10:18:11.904Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T11:21:24.313Z',
  //         lower: '2022-03-27T10:52:27.204Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T11:23:49.470Z',
  //         lower: '2022-03-27T11:21:25.274Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T11:23:49.470Z',
  //         lower: '2022-03-27T11:21:25.274Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T11:59:00.527Z',
  //         lower: '2022-03-27T11:23:50.431Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T12:23:35.185Z',
  //         lower: '2022-03-27T11:59:01.488Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T12:29:52.979Z',
  //         lower: '2022-03-27T12:23:36.146Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T12:44:22.001Z',
  //         lower: '2022-03-27T12:29:53.940Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:01:45.020Z',
  //         lower: '2022-03-27T12:44:22.962Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:07:59.930Z',
  //         lower: '2022-03-27T13:01:45.981Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:23:56.443Z',
  //         lower: '2022-03-27T13:08:00.891Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:15:43.280Z',
  //         lower: '2022-03-27T13:13:18.122Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:34:04.951Z',
  //         lower: '2022-03-27T13:23:57.405Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:48:03.211Z',
  //         lower: '2022-03-27T13:34:05.912Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:51:53.925Z',
  //         lower: '2022-03-27T13:48:04.173Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T13:58:08.835Z',
  //         lower: '2022-03-27T13:51:54.886Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-27T14:00:04.192Z',
  //         lower: '2022-03-27T13:58:09.796Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8086226e7,
  //   hrBaseline: null,
  //   id: 406299900,
  //   inSleepEfficiency: 0.78125817,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 0,
  //   lightSleepDuration: 8924249,
  //   maxHeartRate: null,
  //   needFromStrain: 2160463.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-27T16:05:06.603Z',
  //     lower: '2022-03-27T04:35:06.603Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 62.0,
  //   projectedSleep: 2.2631662e7,
  //   qualityDuration: 22631662,
  //   remSleepDuration: 7306119,
  //   respiratoryRate: 15.644531,
  //   responded: false,
  //   score: 62,
  //   significant: false,
  //   sleepConsistency: 79.0,
  //   sleepNeed: 3.6385536e7,
  //   slowWaveSleepDuration: 6401294,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 2.8968225e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-27T14:28:11.067Z',
  //   userId: 2051562,
  //   wakeDuration: 6373333,
  // },
  // {
  //   activityId: 406718858,
  //   algoVersion: '5.0.0',
  //   arousalTime: 1550601.0,
  //   autoDetected: true,
  //   averageHeartRate: null,
  //   capTouch80th: null,
  //   createdAt: '2022-03-28T07:34:40.826Z',
  //   creditFromNaps: 7871136.0,
  //   cyclesCount: 3,
  //   debtPost: 3055965.0,
  //   debtPre: 5336316.0,
  //   disturbances: 12,
  //   during: {
  //     upper: '2022-03-28T07:25:19.953Z',
  //     lower: '2022-03-27T23:47:35.310Z',
  //     bounds: '[)',
  //   },
  //   events: [
  //     {
  //       during: {
  //         upper: '2022-03-28T00:03:07.779Z',
  //         lower: '2022-03-27T23:47:35.310Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T00:17:13.742Z',
  //         lower: '2022-03-28T00:03:08.740Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T00:33:40.044Z',
  //         lower: '2022-03-28T00:17:14.703Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T00:22:05.018Z',
  //         lower: '2022-03-28T00:19:11.983Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T00:48:35.034Z',
  //         lower: '2022-03-28T00:33:41.005Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T00:50:30.391Z',
  //         lower: '2022-03-28T00:48:35.995Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T00:50:30.391Z',
  //         lower: '2022-03-28T00:48:35.995Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T00:51:28.069Z',
  //         lower: '2022-03-28T00:50:31.352Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T01:32:04.033Z',
  //         lower: '2022-03-28T00:51:29.031Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T01:01:07.750Z',
  //         lower: '2022-03-28T00:59:12.394Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T01:25:19.323Z',
  //         lower: '2022-03-28T01:23:23.966Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T01:43:40.033Z',
  //         lower: '2022-03-28T01:32:04.995Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T02:11:40.398Z',
  //         lower: '2022-03-28T01:43:40.994Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T02:13:07.877Z',
  //         lower: '2022-03-28T02:11:41.360Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T02:22:18.692Z',
  //         lower: '2022-03-28T02:13:08.839Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T02:37:17.514Z',
  //         lower: '2022-03-28T02:22:19.653Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T03:01:26.190Z',
  //         lower: '2022-03-28T02:37:18.476Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T03:03:21.547Z',
  //         lower: '2022-03-28T03:01:27.151Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T03:05:45.743Z',
  //         lower: '2022-03-28T03:03:22.508Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T03:40:05.810Z',
  //         lower: '2022-03-28T03:05:46.704Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T03:51:40.835Z',
  //         lower: '2022-03-28T03:40:06.771Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:12:54.565Z',
  //         lower: '2022-03-28T03:51:41.797Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:23:02.112Z',
  //         lower: '2022-03-28T04:12:55.527Z',
  //         bounds: '[)',
  //       },
  //       type: 'wake',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:24:28.629Z',
  //         lower: '2022-03-28T04:23:03.073Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:30:45.462Z',
  //         lower: '2022-03-28T04:24:29.591Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:34:08.298Z',
  //         lower: '2022-03-28T04:30:46.423Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:34:08.298Z',
  //         lower: '2022-03-28T04:30:46.423Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:34:37.137Z',
  //         lower: '2022-03-28T04:34:09.259Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:41:20.886Z',
  //         lower: '2022-03-28T04:34:38.098Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:50:33.637Z',
  //         lower: '2022-03-28T04:41:21.847Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:31:30.758Z',
  //         lower: '2022-03-28T04:50:34.599Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T04:54:26.287Z',
  //         lower: '2022-03-28T04:52:31.878Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:17:04.626Z',
  //         lower: '2022-03-28T05:15:39.070Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:34:24.759Z',
  //         lower: '2022-03-28T05:31:31.719Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:36:20.116Z',
  //         lower: '2022-03-28T05:34:25.720Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:36:20.116Z',
  //         lower: '2022-03-28T05:34:25.720Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:47:54.179Z',
  //         lower: '2022-03-28T05:36:21.077Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:49:49.536Z',
  //         lower: '2022-03-28T05:47:55.141Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T05:49:49.536Z',
  //         lower: '2022-03-28T05:47:55.141Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T06:04:47.410Z',
  //         lower: '2022-03-28T05:49:50.498Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T06:13:29.413Z',
  //         lower: '2022-03-28T06:04:48.371Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T06:18:46.644Z',
  //         lower: '2022-03-28T06:13:30.374Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T06:33:40.673Z',
  //         lower: '2022-03-28T06:18:47.605Z',
  //         bounds: '[)',
  //       },
  //       type: 'sws',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T06:36:05.830Z',
  //         lower: '2022-03-28T06:33:41.634Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T07:19:30.037Z',
  //         lower: '2022-03-28T06:33:41.634Z',
  //         bounds: '[)',
  //       },
  //       type: 'light',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T06:53:54.817Z',
  //         lower: '2022-03-28T06:51:31.582Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T07:12:15.526Z',
  //         lower: '2022-03-28T07:10:21.131Z',
  //         bounds: '[)',
  //       },
  //       type: 'disturbances',
  //     },
  //     {
  //       during: {
  //         upper: '2022-03-28T07:25:18.992Z',
  //         lower: '2022-03-28T07:19:30.999Z',
  //         bounds: '[)',
  //       },
  //       type: 'rem',
  //     },
  //   ],
  //   habitualSleepNeed: 2.8085877e7,
  //   hrBaseline: null,
  //   id: 406718858,
  //   inSleepEfficiency: 0.71280706,
  //   isNap: false,
  //   kilojoules: null,
  //   latency: 0,
  //   lightSleepDuration: 11400987,
  //   maxHeartRate: null,
  //   needFromStrain: 137179.0,
  //   noDataDuration: 0,
  //   normal: true,
  //   optimalSleepTimes: {
  //     upper: '2022-03-28T13:13:54.635Z',
  //     lower: '2022-03-28T05:58:54.635Z',
  //     bounds: '[)',
  //   },
  //   percentRecorded: 1.0,
  //   projectedScore: 76.0,
  //   projectedSleep: 1.9576308e7,
  //   qualityDuration: 19576307,
  //   remSleepDuration: 3652064,
  //   respiratoryRate: 17.90039,
  //   responded: false,
  //   score: 76,
  //   significant: false,
  //   sleepConsistency: 17.0,
  //   sleepNeed: 2.5688238e7,
  //   slowWaveSleepDuration: 4523256,
  //   source: 'auto',
  //   state: 'complete',
  //   surveyResponseId: null,
  //   teamActId: null,
  //   timeInBed: 2.7463682e7,
  //   timezoneOffset: '-0400',
  //   updatedAt: '2022-03-28T07:34:43.150Z',
  //   userId: 2051562,
  //   wakeDuration: 7917274,
  // },
  {
    activityId: 408174556,
    algoVersion: '5.0.0',
    arousalTime: 1436199.0,
    autoDetected: false,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-03-30T13:38:34.472Z',
    creditFromNaps: 0.0,
    cyclesCount: 3,
    debtPost: 7155270.0,
    debtPre: 4333142.0,
    disturbances: 10,
    during: {
      upper: '2022-03-30T13:02:45.669Z',
      lower: '2022-03-30T06:29:21.521Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-03-30T06:31:16.878Z',
          lower: '2022-03-30T06:29:21.521Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-03-30T06:31:16.878Z',
          lower: '2022-03-30T06:29:21.521Z',
          bounds: '[)',
        },
        type: 'latency',
      },
      {
        during: {
          upper: '2022-03-30T06:39:28.107Z',
          lower: '2022-03-30T06:31:17.840Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T06:56:52.087Z',
          lower: '2022-03-30T06:39:29.068Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-30T07:03:08.919Z',
          lower: '2022-03-30T06:56:53.048Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T07:07:28.485Z',
          lower: '2022-03-30T07:03:09.881Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-03-30T07:18:38.517Z',
          lower: '2022-03-30T07:07:29.447Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T07:55:17.053Z',
          lower: '2022-03-30T07:18:39.478Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-30T07:57:41.249Z',
          lower: '2022-03-30T07:55:18.014Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T07:58:38.927Z',
          lower: '2022-03-30T07:55:18.014Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T08:14:34.480Z',
          lower: '2022-03-30T07:58:40.850Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-30T08:16:30.798Z',
          lower: '2022-03-30T08:14:35.441Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T08:24:42.039Z',
          lower: '2022-03-30T08:14:35.441Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T08:40:35.669Z',
          lower: '2022-03-30T08:24:43.000Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-30T09:05:11.289Z',
          lower: '2022-03-30T08:40:36.630Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T08:55:31.608Z',
          lower: '2022-03-30T08:53:37.212Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T09:08:33.164Z',
          lower: '2022-03-30T09:05:12.250Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-30T09:13:21.556Z',
          lower: '2022-03-30T09:08:34.125Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T09:14:48.073Z',
          lower: '2022-03-30T09:13:22.517Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-30T09:18:11.871Z',
          lower: '2022-03-30T09:14:49.035Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T09:18:11.871Z',
          lower: '2022-03-30T09:14:49.035Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T10:12:35.533Z',
          lower: '2022-03-30T09:18:12.832Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-30T10:31:22.198Z',
          lower: '2022-03-30T10:12:36.494Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T10:50:10.786Z',
          lower: '2022-03-30T10:31:23.159Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-30T10:59:19.692Z',
          lower: '2022-03-30T10:50:11.747Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-03-30T11:29:42.344Z',
          lower: '2022-03-30T10:59:20.654Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T11:07:31.882Z',
          lower: '2022-03-30T11:05:37.486Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T11:28:44.653Z',
          lower: '2022-03-30T11:26:21.418Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T11:50:58.012Z',
          lower: '2022-03-30T11:29:43.305Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-30T11:52:53.369Z',
          lower: '2022-03-30T11:50:58.973Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T11:52:53.369Z',
          lower: '2022-03-30T11:50:58.973Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T11:54:48.726Z',
          lower: '2022-03-30T11:52:54.330Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-30T11:56:44.083Z',
          lower: '2022-03-30T11:54:49.687Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T12:13:07.513Z',
          lower: '2022-03-30T11:54:49.687Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T12:02:02.275Z',
          lower: '2022-03-30T11:58:11.562Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T12:25:40.217Z',
          lower: '2022-03-30T12:13:08.474Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-30T12:37:13.331Z',
          lower: '2022-03-30T12:25:41.178Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-30T12:29:30.943Z',
          lower: '2022-03-30T12:27:07.704Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-30T13:03:13.547Z',
          lower: '2022-03-30T12:37:14.293Z',
          bounds: '[)',
        },
        type: 'rem',
      },
    ],
    habitualSleepNeed: 2.808518e7,
    hrBaseline: null,
    id: 408174556,
    inSleepEfficiency: 0.90522605,
    isNap: false,
    kilojoules: null,
    latency: 115357,
    lightSleepDuration: 7735469,
    maxHeartRate: null,
    needFromStrain: 0.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: null,
    percentRecorded: 1.0,
    projectedScore: 66.0,
    projectedSleep: 2.12879e7,
    qualityDuration: 21287901,
    remSleepDuration: 7466868,
    respiratoryRate: 16.113281,
    responded: false,
    score: 66,
    significant: false,
    sleepConsistency: 34.0,
    sleepNeed: 3.2418322e7,
    slowWaveSleepDuration: 6085564,
    source: 'auto+user',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 2.3632026e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-03-30T13:38:39.173Z',
    userId: 2051562,
    wakeDuration: 2373770,
  },
  {
    activityId: 408779233,
    algoVersion: '5.0.0',
    arousalTime: 1432373.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-03-31T13:40:39.089Z',
    creditFromNaps: 0.0,
    cyclesCount: 4,
    debtPost: 5391048.0,
    debtPre: 6138541.0,
    disturbances: 12,
    during: {
      upper: '2022-03-31T13:29:47.768Z',
      lower: '2022-03-31T05:45:43.291Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-03-31T05:57:19.277Z',
          lower: '2022-03-31T05:45:43.291Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T05:52:57.802Z',
          lower: '2022-03-31T05:50:34.567Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T06:04:32.827Z',
          lower: '2022-03-31T05:57:20.239Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-31T06:06:29.145Z',
          lower: '2022-03-31T06:04:33.788Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T06:06:29.145Z',
          lower: '2022-03-31T06:04:33.788Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T06:20:28.380Z',
          lower: '2022-03-31T06:06:30.107Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-31T06:31:03.789Z',
          lower: '2022-03-31T06:20:29.341Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T06:25:17.718Z',
          lower: '2022-03-31T06:23:52.162Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T06:45:30.901Z',
          lower: '2022-03-31T06:31:04.750Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-31T06:53:13.290Z',
          lower: '2022-03-31T06:45:31.863Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T06:59:03.219Z',
          lower: '2022-03-31T06:53:14.251Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-31T07:39:05.552Z',
          lower: '2022-03-31T06:59:04.180Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T07:04:50.251Z',
          lower: '2022-03-31T07:01:57.215Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T07:17:50.845Z',
          lower: '2022-03-31T07:15:56.437Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T07:31:50.066Z',
          lower: '2022-03-31T07:29:55.671Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T08:22:01.866Z',
          lower: '2022-03-31T07:39:06.513Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-31T08:24:28.947Z',
          lower: '2022-03-31T08:22:02.828Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T08:54:22.772Z',
          lower: '2022-03-31T08:24:29.908Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-31T09:22:49.106Z',
          lower: '2022-03-31T08:54:23.733Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T09:30:31.495Z',
          lower: '2022-03-31T09:22:50.067Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-31T09:32:26.864Z',
          lower: '2022-03-31T09:30:32.456Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T09:32:26.864Z',
          lower: '2022-03-31T09:30:32.456Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T09:43:59.967Z',
          lower: '2022-03-31T09:32:27.826Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-31T09:50:44.676Z',
          lower: '2022-03-31T09:44:00.928Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T10:41:53.195Z',
          lower: '2022-03-31T09:50:45.637Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-03-31T10:44:17.391Z',
          lower: '2022-03-31T10:41:54.156Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T10:45:15.070Z',
          lower: '2022-03-31T10:41:54.156Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T11:15:38.681Z',
          lower: '2022-03-31T10:45:16.031Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-31T11:17:34.038Z',
          lower: '2022-03-31T11:15:39.642Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T11:17:34.038Z',
          lower: '2022-03-31T11:15:39.642Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T11:20:57.835Z',
          lower: '2022-03-31T11:17:34.999Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-31T12:03:53.188Z',
          lower: '2022-03-31T11:20:58.796Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T11:32:31.911Z',
          lower: '2022-03-31T11:31:06.355Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T12:03:53.188Z',
          lower: '2022-03-31T12:01:58.792Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T12:58:25.502Z',
          lower: '2022-03-31T12:03:54.149Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-03-31T13:00:20.859Z',
          lower: '2022-03-31T12:58:26.464Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-03-31T13:17:15.052Z',
          lower: '2022-03-31T12:58:26.464Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-03-31T13:30:16.606Z',
          lower: '2022-03-31T13:17:16.013Z',
          bounds: '[)',
        },
        type: 'sws',
      },
    ],
    habitualSleepNeed: 2.8084831e7,
    hrBaseline: null,
    id: 408779233,
    inSleepEfficiency: 0.9493253,
    isNap: false,
    kilojoules: null,
    latency: 0,
    lightSleepDuration: 9274611,
    maxHeartRate: null,
    needFromStrain: 623547.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-03-31T12:47:45.669Z',
      lower: '2022-03-31T03:02:45.669Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 76.0,
    projectedSleep: 2.6460844e7,
    qualityDuration: 26460844,
    remSleepDuration: 9910927,
    respiratoryRate: 15.498047,
    responded: false,
    score: 76,
    significant: false,
    sleepConsistency: 55.0,
    sleepNeed: 3.484692e7,
    slowWaveSleepDuration: 7275306,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 2.7873315e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-03-31T13:40:40.490Z',
    userId: 2051562,
    wakeDuration: 1445841,
  },
  {
    activityId: 409400939,
    algoVersion: '5.0.0',
    arousalTime: 1609226.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-01T14:37:20.467Z',
    creditFromNaps: 0.0,
    cyclesCount: 7,
    debtPost: 6274756.0,
    debtPre: 4333034.0,
    disturbances: 11,
    during: {
      upper: '2022-04-01T13:48:20.552Z',
      lower: '2022-04-01T06:30:09.563Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-01T06:43:12.053Z',
          lower: '2022-04-01T06:30:09.563Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T06:48:58.124Z',
          lower: '2022-04-01T06:43:13.015Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-01T07:03:29.082Z',
          lower: '2022-04-01T06:48:59.085Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T07:05:24.438Z',
          lower: '2022-04-01T07:03:30.043Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T07:13:37.589Z',
          lower: '2022-04-01T07:05:25.400Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-01T07:21:20.940Z',
          lower: '2022-04-01T07:13:38.551Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T07:23:18.219Z',
          lower: '2022-04-01T07:21:21.901Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T07:26:40.094Z',
          lower: '2022-04-01T07:21:21.901Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T07:32:00.209Z',
          lower: '2022-04-01T07:26:41.055Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-01T07:37:46.280Z',
          lower: '2022-04-01T07:32:01.170Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T07:45:58.469Z',
          lower: '2022-04-01T07:37:47.241Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T08:12:01.568Z',
          lower: '2022-04-01T07:45:59.431Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T07:51:45.501Z',
          lower: '2022-04-01T07:49:51.106Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T08:10:05.250Z',
          lower: '2022-04-01T08:06:43.376Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T08:17:49.562Z',
          lower: '2022-04-01T08:12:02.530Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T08:20:13.758Z',
          lower: '2022-04-01T08:17:50.523Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T08:20:13.758Z',
          lower: '2022-04-01T08:17:50.523Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T08:53:27.535Z',
          lower: '2022-04-01T08:20:14.719Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T08:55:22.892Z',
          lower: '2022-04-01T08:53:28.497Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T08:55:22.892Z',
          lower: '2022-04-01T08:53:28.497Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T09:08:27.332Z',
          lower: '2022-04-01T08:55:23.854Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T09:27:44.760Z',
          lower: '2022-04-01T09:08:28.293Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T09:42:11.873Z',
          lower: '2022-04-01T09:27:45.722Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-01T09:52:47.297Z',
          lower: '2022-04-01T09:42:12.834Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-01T10:10:36.271Z',
          lower: '2022-04-01T09:52:48.258Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T10:09:08.792Z',
          lower: '2022-04-01T10:06:16.718Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T10:26:59.701Z',
          lower: '2022-04-01T10:10:37.232Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T10:34:12.290Z',
          lower: '2022-04-01T10:27:00.663Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T11:05:01.871Z',
          lower: '2022-04-01T10:34:13.251Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-01T11:07:54.906Z',
          lower: '2022-04-01T11:05:02.832Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T11:18:59.183Z',
          lower: '2022-04-01T11:05:02.832Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T11:34:22.999Z',
          lower: '2022-04-01T11:19:00.144Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T11:45:29.198Z',
          lower: '2022-04-01T11:34:23.960Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T11:57:31.153Z',
          lower: '2022-04-01T11:45:30.159Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-01T12:13:52.633Z',
          lower: '2022-04-01T11:57:32.114Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T12:02:48.384Z',
          lower: '2022-04-01T12:01:22.828Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T12:41:51.102Z',
          lower: '2022-04-01T12:13:53.594Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-01T12:45:13.937Z',
          lower: '2022-04-01T12:41:52.063Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T12:49:05.613Z',
          lower: '2022-04-01T12:41:52.063Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T12:57:45.678Z',
          lower: '2022-04-01T12:49:06.574Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T13:10:44.339Z',
          lower: '2022-04-01T12:57:46.639Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T13:16:31.382Z',
          lower: '2022-04-01T13:10:45.298Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T13:19:25.379Z',
          lower: '2022-04-01T13:16:32.343Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T13:28:34.285Z',
          lower: '2022-04-01T13:16:32.343Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T13:35:49.771Z',
          lower: '2022-04-01T13:28:35.247Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T13:37:45.127Z',
          lower: '2022-04-01T13:35:50.732Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-01T13:37:45.127Z',
          lower: '2022-04-01T13:35:50.732Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-01T13:46:53.073Z',
          lower: '2022-04-01T13:37:46.089Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-01T13:48:19.590Z',
          lower: '2022-04-01T13:46:54.034Z',
          bounds: '[)',
        },
        type: 'light',
      },
    ],
    habitualSleepNeed: 2.8084483e7,
    hrBaseline: null,
    id: 409400939,
    inSleepEfficiency: 0.88431615,
    isNap: false,
    kilojoules: null,
    latency: 0,
    lightSleepDuration: 9815573,
    maxHeartRate: null,
    needFromStrain: 591910.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-01T13:14:47.768Z',
      lower: '2022-04-01T03:59:47.768Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 70.0,
    projectedSleep: 2.3248696e7,
    qualityDuration: 23248695,
    remSleepDuration: 7964572,
    respiratoryRate: 15.380859,
    responded: false,
    score: 70,
    significant: false,
    sleepConsistency: 72.0,
    sleepNeed: 3.3009428e7,
    slowWaveSleepDuration: 5468550,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 2.6290027e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-01T14:37:21.789Z',
    userId: 2051562,
    wakeDuration: 3071629,
  },
  {
    activityId: 410646896,
    algoVersion: '5.0.0',
    arousalTime: 978611.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-03T19:20:37.540Z',
    creditFromNaps: 0.0,
    cyclesCount: 4,
    debtPost: 7658807.0,
    debtPre: 5416158.0,
    disturbances: 8,
    during: {
      upper: '2022-04-02T14:01:48.565Z',
      lower: '2022-04-02T07:05:37.411Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-02T07:13:18.839Z',
          lower: '2022-04-02T07:05:37.411Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-02T07:13:18.839Z',
          lower: '2022-04-02T07:05:37.411Z',
          bounds: '[)',
        },
        type: 'latency',
      },
      {
        during: {
          upper: '2022-04-02T07:22:27.745Z',
          lower: '2022-04-02T07:13:19.800Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T07:26:49.221Z',
          lower: '2022-04-02T07:22:28.707Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-02T07:33:33.932Z',
          lower: '2022-04-02T07:26:50.182Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T07:47:02.404Z',
          lower: '2022-04-02T07:33:34.893Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-02T07:54:15.954Z',
          lower: '2022-04-02T07:47:03.365Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T07:51:51.758Z',
          lower: '2022-04-02T07:49:57.362Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T08:34:15.403Z',
          lower: '2022-04-02T07:54:16.915Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-02T09:00:45.432Z',
          lower: '2022-04-02T08:34:16.365Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-02T09:21:30.338Z',
          lower: '2022-04-02T09:00:46.393Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T09:06:32.464Z',
          lower: '2022-04-02T09:04:37.107Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T09:20:03.820Z',
          lower: '2022-04-02T09:18:07.502Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T09:23:57.418Z',
          lower: '2022-04-02T09:21:31.299Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-02T09:31:41.729Z',
          lower: '2022-04-02T09:23:58.379Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-02T09:36:59.922Z',
          lower: '2022-04-02T09:31:42.691Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T09:45:12.112Z',
          lower: '2022-04-02T09:37:00.884Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-02T10:09:16.957Z',
          lower: '2022-04-02T09:45:13.073Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T09:55:18.697Z',
          lower: '2022-04-02T09:52:55.462Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T10:27:11.707Z',
          lower: '2022-04-02T10:09:17.918Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-02T10:29:08.030Z',
          lower: '2022-04-02T10:27:12.668Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T10:30:05.708Z',
          lower: '2022-04-02T10:29:08.991Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-02T11:20:49.233Z',
          lower: '2022-04-02T10:30:06.669Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-02T11:29:58.152Z',
          lower: '2022-04-02T11:20:50.194Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T11:41:32.216Z',
          lower: '2022-04-02T11:29:59.114Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-02T11:47:48.100Z',
          lower: '2022-04-02T11:41:33.177Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T12:08:32.045Z',
          lower: '2022-04-02T11:47:49.061Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-02T12:20:06.109Z',
          lower: '2022-04-02T12:08:33.006Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T12:12:52.559Z',
          lower: '2022-04-02T12:10:58.163Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T12:32:36.903Z',
          lower: '2022-04-02T12:20:07.070Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-02T13:36:14.293Z',
          lower: '2022-04-02T12:32:37.864Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-02T12:45:38.458Z',
          lower: '2022-04-02T12:43:43.102Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T13:32:23.579Z',
          lower: '2022-04-02T13:29:58.422Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T13:47:19.531Z',
          lower: '2022-04-02T13:36:15.254Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-02T13:54:05.202Z',
          lower: '2022-04-02T13:47:20.492Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-02T13:59:23.408Z',
          lower: '2022-04-02T13:54:06.164Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-02T14:01:18.765Z',
          lower: '2022-04-02T13:59:24.369Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-02T14:01:47.604Z',
          lower: '2022-04-02T13:59:24.369Z',
          bounds: '[)',
        },
        type: 'light',
      },
    ],
    habitualSleepNeed: 2.8083786e7,
    hrBaseline: null,
    id: 410646896,
    inSleepEfficiency: 0.8946242,
    isNap: false,
    kilojoules: null,
    latency: 461428,
    lightSleepDuration: 9088896,
    maxHeartRate: null,
    needFromStrain: 339889.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-02T13:33:20.552Z',
      lower: '2022-04-02T04:03:20.552Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 65.0,
    projectedSleep: 2.1926134e7,
    qualityDuration: 21926134,
    remSleepDuration: 7360991,
    respiratoryRate: 15.322266,
    responded: false,
    score: 65,
    significant: false,
    sleepConsistency: 84.0,
    sleepNeed: 3.3839834e7,
    slowWaveSleepDuration: 5476247,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 2.4970193e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-03T19:20:38.866Z',
    userId: 2051562,
    wakeDuration: 3076433,
  },
  {
    activityId: 410655498,
    algoVersion: '5.0.0',
    arousalTime: 2103351.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-03T19:47:10.190Z',
    creditFromNaps: 0.0,
    cyclesCount: 8,
    debtPost: 3158343.0,
    debtPre: 4914662.0,
    disturbances: 15,
    during: {
      upper: '2022-04-03T13:51:57.058Z',
      lower: '2022-04-03T05:17:05.103Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-03T05:19:31.221Z',
          lower: '2022-04-03T05:17:05.103Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-03T05:19:31.221Z',
          lower: '2022-04-03T05:17:05.103Z',
          bounds: '[)',
        },
        type: 'latency',
      },
      {
        during: {
          upper: '2022-04-03T05:56:21.281Z',
          lower: '2022-04-03T05:19:32.183Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T05:34:06.011Z',
          lower: '2022-04-03T05:32:10.655Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T05:41:51.284Z',
          lower: '2022-04-03T05:39:26.127Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T05:56:21.281Z',
          lower: '2022-04-03T05:53:28.245Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T06:02:37.152Z',
          lower: '2022-04-03T05:56:22.242Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T06:11:47.033Z',
          lower: '2022-04-03T06:02:38.113Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-03T06:16:06.586Z',
          lower: '2022-04-03T06:11:47.994Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T06:20:28.062Z',
          lower: '2022-04-03T06:16:07.547Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-03T06:23:49.936Z',
          lower: '2022-04-03T06:20:29.023Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T06:29:09.103Z',
          lower: '2022-04-03T06:23:50.897Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T06:29:09.103Z',
          lower: '2022-04-03T06:26:44.894Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T06:58:37.922Z',
          lower: '2022-04-03T06:29:10.064Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T07:11:37.555Z',
          lower: '2022-04-03T06:58:38.883Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T07:53:37.168Z',
          lower: '2022-04-03T07:11:38.517Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-03T08:01:19.557Z',
          lower: '2022-04-03T07:53:38.129Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T08:00:20.917Z',
          lower: '2022-04-03T07:57:57.683Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T08:09:32.721Z',
          lower: '2022-04-03T08:01:20.519Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T09:26:53.004Z',
          lower: '2022-04-03T08:09:33.682Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T08:17:43.949Z',
          lower: '2022-04-03T08:14:50.914Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T08:31:15.305Z',
          lower: '2022-04-03T08:27:25.553Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T09:08:34.216Z',
          lower: '2022-04-03T09:06:08.098Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T09:24:28.808Z',
          lower: '2022-04-03T09:22:04.612Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T09:54:22.620Z',
          lower: '2022-04-03T09:26:53.965Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T10:16:03.282Z',
          lower: '2022-04-03T09:54:23.582Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T10:48:19.382Z',
          lower: '2022-04-03T10:16:04.244Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-03T10:50:44.539Z',
          lower: '2022-04-03T10:48:20.343Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T11:08:34.487Z',
          lower: '2022-04-03T10:48:20.343Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T11:02:48.417Z',
          lower: '2022-04-03T11:00:53.060Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T11:37:58.512Z',
          lower: '2022-04-03T11:08:35.449Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T12:17:00.284Z',
          lower: '2022-04-03T11:37:59.474Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T11:51:56.773Z',
          lower: '2022-04-03T11:50:01.416Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T12:11:13.239Z',
          lower: '2022-04-03T12:09:47.683Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T12:30:58.544Z',
          lower: '2022-04-03T12:17:01.245Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T12:43:29.338Z',
          lower: '2022-04-03T12:30:59.506Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T12:36:15.789Z',
          lower: '2022-04-03T12:34:21.393Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T12:52:38.258Z',
          lower: '2022-04-03T12:43:30.300Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-03T13:13:22.203Z',
          lower: '2022-04-03T12:52:39.219Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T13:34:34.026Z',
          lower: '2022-04-03T13:13:23.164Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-03T13:36:29.383Z',
          lower: '2022-04-03T13:34:34.987Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-03T13:40:22.019Z',
          lower: '2022-04-03T13:34:34.987Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-03T13:48:33.248Z',
          lower: '2022-04-03T13:40:22.981Z',
          bounds: '[)',
        },
        type: 'rem',
      },
    ],
    habitualSleepNeed: 2.8083786e7,
    hrBaseline: null,
    id: 410655498,
    inSleepEfficiency: 0.905082,
    isNap: false,
    kilojoules: null,
    latency: 146118,
    lightSleepDuration: 13510145,
    maxHeartRate: null,
    needFromStrain: 961276.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-03T15:31:48.565Z',
      lower: '2022-04-03T04:31:48.565Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 81.0,
    projectedSleep: 2.7643038e7,
    qualityDuration: 27643038,
    remSleepDuration: 8398661,
    respiratoryRate: 15.3515625,
    responded: false,
    score: 81,
    significant: false,
    sleepConsistency: 80.0,
    sleepNeed: 3.3959725e7,
    slowWaveSleepDuration: 5734232,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 3.0688145e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-03T19:47:11.625Z',
    userId: 2051562,
    wakeDuration: 3079347,
  },
  {
    activityId: 411003545,
    algoVersion: '5.0.0',
    arousalTime: 2019731.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-04T11:42:52.635Z',
    creditFromNaps: 0.0,
    cyclesCount: 6,
    debtPost: 3839124.0,
    debtPre: 3430191.0,
    disturbances: 15,
    during: {
      upper: '2022-04-04T11:30:26.445Z',
      lower: '2022-04-04T03:19:23.998Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-04T03:21:48.194Z',
          lower: '2022-04-04T03:19:23.998Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-04T03:21:48.194Z',
          lower: '2022-04-04T03:19:23.998Z',
          bounds: '[)',
        },
        type: 'latency',
      },
      {
        during: {
          upper: '2022-04-04T03:33:52.058Z',
          lower: '2022-04-04T03:21:49.155Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T04:11:05.201Z',
          lower: '2022-04-04T03:33:53.020Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-04T04:15:24.755Z',
          lower: '2022-04-04T04:11:06.163Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-04T04:19:18.352Z',
          lower: '2022-04-04T04:15:25.716Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T04:22:40.227Z',
          lower: '2022-04-04T04:19:19.314Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T04:24:35.584Z',
          lower: '2022-04-04T04:22:41.188Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T04:24:35.584Z',
          lower: '2022-04-04T04:22:41.188Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T04:40:04.220Z',
          lower: '2022-04-04T04:24:36.545Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T04:49:44.862Z',
          lower: '2022-04-04T04:40:05.181Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T04:46:22.975Z',
          lower: '2022-04-04T04:43:58.779Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T05:05:10.602Z',
          lower: '2022-04-04T04:49:45.824Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-04T05:18:12.145Z',
          lower: '2022-04-04T05:05:11.563Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-04T05:26:24.334Z',
          lower: '2022-04-04T05:18:13.106Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T05:22:33.620Z',
          lower: '2022-04-04T05:20:37.302Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T06:02:59.987Z',
          lower: '2022-04-04T05:26:25.296Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-04T06:07:19.540Z',
          lower: '2022-04-04T06:03:00.948Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T06:42:31.558Z',
          lower: '2022-04-04T06:07:20.501Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T07:01:51.868Z',
          lower: '2022-04-04T06:42:32.519Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T06:52:40.065Z',
          lower: '2022-04-04T06:50:15.869Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T07:20:10.656Z',
          lower: '2022-04-04T07:01:52.830Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-04T07:22:37.736Z',
          lower: '2022-04-04T07:20:11.617Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T07:48:41.796Z',
          lower: '2022-04-04T07:20:11.617Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T07:29:25.330Z',
          lower: '2022-04-04T07:27:29.973Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T07:43:50.520Z',
          lower: '2022-04-04T07:41:56.125Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T07:58:21.478Z',
          lower: '2022-04-04T07:48:42.758Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T08:00:17.796Z',
          lower: '2022-04-04T07:58:22.439Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T08:00:17.796Z',
          lower: '2022-04-04T07:58:22.439Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T08:03:11.792Z',
          lower: '2022-04-04T08:00:18.757Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T08:52:04.767Z',
          lower: '2022-04-04T08:03:12.754Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T08:40:32.625Z',
          lower: '2022-04-04T08:38:37.269Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T09:02:40.204Z',
          lower: '2022-04-04T08:52:05.728Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-04T09:05:33.240Z',
          lower: '2022-04-04T09:02:41.165Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T09:09:52.792Z',
          lower: '2022-04-04T09:02:41.165Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T09:12:18.911Z',
          lower: '2022-04-04T09:09:53.754Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T09:14:15.242Z',
          lower: '2022-04-04T09:12:19.873Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T09:14:15.242Z',
          lower: '2022-04-04T09:12:19.873Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T09:26:47.946Z',
          lower: '2022-04-04T09:14:16.204Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T09:45:38.457Z',
          lower: '2022-04-04T09:26:48.907Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T09:53:48.736Z',
          lower: '2022-04-04T09:45:39.418Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T09:55:44.093Z',
          lower: '2022-04-04T09:53:49.697Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T09:55:44.093Z',
          lower: '2022-04-04T09:53:49.697Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T09:57:10.611Z',
          lower: '2022-04-04T09:55:45.054Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T10:03:00.527Z',
          lower: '2022-04-04T09:57:11.572Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-04T10:28:33.825Z',
          lower: '2022-04-04T10:03:01.488Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T10:15:33.243Z',
          lower: '2022-04-04T10:13:37.886Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T10:47:25.296Z',
          lower: '2022-04-04T10:28:34.786Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-04T10:53:41.180Z',
          lower: '2022-04-04T10:47:26.258Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T10:50:19.305Z',
          lower: '2022-04-04T10:47:55.097Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T11:00:24.929Z',
          lower: '2022-04-04T10:53:42.141Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T11:04:18.527Z',
          lower: '2022-04-04T11:00:25.891Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T11:04:18.527Z',
          lower: '2022-04-04T11:00:25.891Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-04T11:11:06.134Z',
          lower: '2022-04-04T11:04:19.488Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-04T11:18:21.606Z',
          lower: '2022-04-04T11:11:07.095Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-04T11:30:25.484Z',
          lower: '2022-04-04T11:18:22.568Z',
          bounds: '[)',
        },
        type: 'rem',
      },
    ],
    habitualSleepNeed: 2.8083438e7,
    hrBaseline: null,
    id: 411003545,
    inSleepEfficiency: 0.88411796,
    isNap: false,
    kilojoules: null,
    latency: 144196,
    lightSleepDuration: 10677143,
    maxHeartRate: null,
    needFromStrain: 378285.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-04T14:36:57.058Z',
      lower: '2022-04-04T05:06:57.058Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 81.0,
    projectedSleep: 2.5919944e7,
    qualityDuration: 25919943,
    remSleepDuration: 7012534,
    respiratoryRate: 14.707031,
    responded: false,
    score: 81,
    significant: false,
    sleepConsistency: 66.0,
    sleepNeed: 3.1891914e7,
    slowWaveSleepDuration: 8230266,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 2.9461486e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-04T11:42:54.486Z',
    userId: 2051562,
    wakeDuration: 3573161,
  },
  {
    activityId: 411696272,
    algoVersion: '5.0.0',
    arousalTime: 1755345.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-05T12:59:40.730Z',
    creditFromNaps: 0.0,
    cyclesCount: 6,
    debtPost: 2800287.0,
    debtPre: 3430172.0,
    disturbances: 14,
    during: {
      upper: '2022-04-05T12:42:03.988Z',
      lower: '2022-04-05T04:08:45.342Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-05T04:11:38.378Z',
          lower: '2022-04-05T04:08:45.342Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-05T04:11:38.378Z',
          lower: '2022-04-05T04:08:45.342Z',
          bounds: '[)',
        },
        type: 'latency',
      },
      {
        during: {
          upper: '2022-04-05T04:28:04.665Z',
          lower: '2022-04-05T04:11:39.339Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T04:56:38.689Z',
          lower: '2022-04-05T04:28:05.626Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-05T05:04:21.090Z',
          lower: '2022-04-05T04:56:39.650Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-05T05:07:44.888Z',
          lower: '2022-04-05T05:04:22.052Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T05:11:36.563Z',
          lower: '2022-04-05T05:07:45.849Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-05T05:57:56.690Z',
          lower: '2022-04-05T05:11:37.524Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T05:43:28.629Z',
          lower: '2022-04-05T05:42:03.073Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T06:04:44.297Z',
          lower: '2022-04-05T05:57:57.651Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-05T06:06:40.615Z',
          lower: '2022-04-05T06:04:45.259Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T06:38:03.843Z',
          lower: '2022-04-05T06:04:45.259Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T06:20:41.772Z',
          lower: '2022-04-05T06:18:45.454Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T06:26:56.682Z',
          lower: '2022-04-05T06:24:33.448Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T07:21:31.895Z',
          lower: '2022-04-05T06:38:04.804Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-05T07:27:48.728Z',
          lower: '2022-04-05T07:21:32.856Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T07:49:32.273Z',
          lower: '2022-04-05T07:27:49.689Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-05T07:51:28.592Z',
          lower: '2022-04-05T07:49:33.235Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T09:07:00.246Z',
          lower: '2022-04-05T07:49:33.235Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T08:09:51.224Z',
          lower: '2022-04-05T08:07:55.867Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T08:22:23.940Z',
          lower: '2022-04-05T08:20:29.545Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T08:28:11.934Z',
          lower: '2022-04-05T08:26:45.416Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T08:39:22.939Z',
          lower: '2022-04-05T08:37:56.421Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T09:37:04.645Z',
          lower: '2022-04-05T09:07:01.207Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-05T09:48:42.554Z',
          lower: '2022-04-05T09:37:05.606Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T10:06:41.154Z',
          lower: '2022-04-05T09:48:43.516Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-05T10:09:06.324Z',
          lower: '2022-04-05T10:06:42.115Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T10:19:15.793Z',
          lower: '2022-04-05T10:06:42.115Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T10:28:55.474Z',
          lower: '2022-04-05T10:19:16.754Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-05T10:38:35.143Z',
          lower: '2022-04-05T10:28:56.436Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T10:59:48.888Z',
          lower: '2022-04-05T10:38:36.104Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-05T11:06:33.598Z',
          lower: '2022-04-05T10:59:49.849Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-05T11:11:50.830Z',
          lower: '2022-04-05T11:06:34.559Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T11:34:36.847Z',
          lower: '2022-04-05T11:11:51.791Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-05T11:47:07.641Z',
          lower: '2022-04-05T11:34:37.809Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T11:59:37.474Z',
          lower: '2022-04-05T11:47:08.603Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-05T12:02:32.432Z',
          lower: '2022-04-05T11:59:38.435Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T12:12:10.177Z',
          lower: '2022-04-05T11:59:38.435Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T12:06:24.107Z',
          lower: '2022-04-05T12:04:29.711Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T12:20:22.380Z',
          lower: '2022-04-05T12:12:11.139Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-05T12:24:13.079Z',
          lower: '2022-04-05T12:20:23.341Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T12:24:13.079Z',
          lower: '2022-04-05T12:20:23.341Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T12:38:41.152Z',
          lower: '2022-04-05T12:24:14.040Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-05T12:40:36.509Z',
          lower: '2022-04-05T12:38:42.113Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-05T12:40:36.509Z',
          lower: '2022-04-05T12:38:42.113Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-05T12:42:03.026Z',
          lower: '2022-04-05T12:40:37.470Z',
          bounds: '[)',
        },
        type: 'rem',
      },
    ],
    habitualSleepNeed: 2.8083286e7,
    hrBaseline: null,
    id: 411696272,
    inSleepEfficiency: 0.9300447,
    isNap: false,
    kilojoules: null,
    latency: 173036,
    lightSleepDuration: 13441691,
    maxHeartRate: null,
    needFromStrain: 1324836.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-05T14:00:26.445Z',
      lower: '2022-04-05T04:45:26.445Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 87.0,
    projectedSleep: 2.8482292e7,
    qualityDuration: 28482292,
    remSleepDuration: 8968522,
    respiratoryRate: 15.058594,
    responded: false,
    score: 87,
    significant: false,
    sleepConsistency: 65.0,
    sleepNeed: 3.2838294e7,
    slowWaveSleepDuration: 6072079,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 3.0797684e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-05T12:59:42.218Z',
    userId: 2051562,
    wakeDuration: 2350648,
  },
  {
    activityId: 412234527,
    algoVersion: '5.0.0',
    arousalTime: 1756318.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-06T11:34:34.385Z',
    creditFromNaps: 0.0,
    cyclesCount: 4,
    debtPost: 5491728.0,
    debtPre: 2346931.0,
    disturbances: 12,
    during: {
      upper: '2022-04-06T11:25:10.282Z',
      lower: '2022-04-06T04:19:39.626Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-06T04:55:48.349Z',
          lower: '2022-04-06T04:19:39.626Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T05:03:02.860Z',
          lower: '2022-04-06T04:55:49.310Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-06T05:06:25.696Z',
          lower: '2022-04-06T05:03:03.821Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T05:06:25.696Z',
          lower: '2022-04-06T05:03:03.821Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T05:13:11.380Z',
          lower: '2022-04-06T05:06:26.657Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T05:25:48.890Z',
          lower: '2022-04-06T05:13:12.342Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T05:21:26.454Z',
          lower: '2022-04-06T05:19:02.257Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T05:28:42.887Z',
          lower: '2022-04-06T05:25:49.852Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T05:49:51.826Z',
          lower: '2022-04-06T05:28:43.848Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T05:38:21.607Z',
          lower: '2022-04-06T05:35:57.411Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T05:55:11.954Z',
          lower: '2022-04-06T05:49:52.787Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-06T06:05:17.577Z',
          lower: '2022-04-06T05:55:12.915Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T06:07:42.735Z',
          lower: '2022-04-06T06:05:18.539Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T06:07:42.735Z',
          lower: '2022-04-06T06:05:18.539Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T06:08:41.375Z',
          lower: '2022-04-06T06:07:43.696Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T06:20:46.213Z',
          lower: '2022-04-06T06:08:42.336Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T06:34:45.447Z',
          lower: '2022-04-06T06:20:47.175Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-06T06:36:40.804Z',
          lower: '2022-04-06T06:34:46.408Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T06:58:25.311Z',
          lower: '2022-04-06T06:34:46.408Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T06:58:25.311Z',
          lower: '2022-04-06T06:55:02.475Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T07:04:12.343Z',
          lower: '2022-04-06T06:58:26.272Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T07:07:05.378Z',
          lower: '2022-04-06T07:04:13.304Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T07:07:05.378Z',
          lower: '2022-04-06T07:04:13.304Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T07:11:24.944Z',
          lower: '2022-04-06T07:07:06.340Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T07:14:17.979Z',
          lower: '2022-04-06T07:11:25.906Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T07:14:17.979Z',
          lower: '2022-04-06T07:11:25.906Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T07:18:38.495Z',
          lower: '2022-04-06T07:14:18.941Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T07:20:05.973Z',
          lower: '2022-04-06T07:18:39.455Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T07:20:05.973Z',
          lower: '2022-04-06T07:18:39.455Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T07:24:25.526Z',
          lower: '2022-04-06T07:20:06.934Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T07:26:49.730Z',
          lower: '2022-04-06T07:24:26.487Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T07:26:49.730Z',
          lower: '2022-04-06T07:24:26.487Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T08:06:55.913Z',
          lower: '2022-04-06T07:26:50.691Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T08:18:29.977Z',
          lower: '2022-04-06T08:06:56.874Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T08:34:51.484Z',
          lower: '2022-04-06T08:18:30.938Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-06T08:55:33.506Z',
          lower: '2022-04-06T08:34:52.446Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T09:09:03.901Z',
          lower: '2022-04-06T08:55:34.468Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-06T09:16:17.451Z',
          lower: '2022-04-06T09:09:04.862Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T09:41:53.646Z',
          lower: '2022-04-06T09:16:18.412Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T09:43:50.925Z',
          lower: '2022-04-06T09:41:54.607Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T09:43:50.925Z',
          lower: '2022-04-06T09:41:54.607Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T09:51:04.475Z',
          lower: '2022-04-06T09:43:51.886Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-06T10:03:07.391Z',
          lower: '2022-04-06T09:51:05.436Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T10:25:20.737Z',
          lower: '2022-04-06T10:03:08.352Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-06T10:27:16.094Z',
          lower: '2022-04-06T10:25:21.698Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-06T10:51:54.583Z',
          lower: '2022-04-06T10:25:21.698Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-06T11:25:09.321Z',
          lower: '2022-04-06T10:51:55.544Z',
          bounds: '[)',
        },
        type: 'rem',
      },
    ],
    habitualSleepNeed: 2.8082938e7,
    hrBaseline: null,
    id: 412234527,
    inSleepEfficiency: 0.91924924,
    isNap: false,
    kilojoules: null,
    latency: 0,
    lightSleepDuration: 10314199,
    maxHeartRate: null,
    needFromStrain: 1580972.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-06T13:27:03.988Z',
      lower: '2022-04-06T03:57:03.988Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 73.0,
    projectedSleep: 2.3468152e7,
    qualityDuration: 23468153,
    remSleepDuration: 8751002,
    respiratoryRate: 15.1171875,
    responded: false,
    score: 73,
    significant: false,
    sleepConsistency: 76.0,
    sleepNeed: 3.2010842e7,
    slowWaveSleepDuration: 4402952,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 2.5529695e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-06T11:34:36.926Z',
    userId: 2051562,
    wakeDuration: 2090764,
  },
  {
    activityId: 412774812,
    algoVersion: '5.0.0',
    arousalTime: 2012982.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-07T10:33:03.439Z',
    creditFromNaps: 0.0,
    cyclesCount: 3,
    debtPost: 2700880.0,
    debtPre: 3791149.0,
    disturbances: 15,
    during: {
      upper: '2022-04-07T13:29:45.021Z',
      lower: '2022-04-07T04:50:36.494Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-07T04:55:27.771Z',
          lower: '2022-04-07T04:50:36.494Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-07T04:55:27.771Z',
          lower: '2022-04-07T04:50:36.494Z',
          bounds: '[)',
        },
        type: 'latency',
      },
      {
        during: {
          upper: '2022-04-07T05:23:24.291Z',
          lower: '2022-04-07T04:55:28.732Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T05:04:37.638Z',
          lower: '2022-04-07T05:02:43.243Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T05:20:02.416Z',
          lower: '2022-04-07T05:16:41.503Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T05:44:38.036Z',
          lower: '2022-04-07T05:23:25.252Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-07T05:46:34.354Z',
          lower: '2022-04-07T05:44:38.998Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T05:52:51.187Z',
          lower: '2022-04-07T05:44:38.998Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T06:10:42.097Z',
          lower: '2022-04-07T05:52:52.148Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T06:20:20.817Z',
          lower: '2022-04-07T06:10:43.058Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T06:44:55.475Z',
          lower: '2022-04-07T06:20:21.778Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-07T06:59:21.626Z',
          lower: '2022-04-07T06:44:56.437Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T06:48:17.350Z',
          lower: '2022-04-07T06:45:25.276Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T07:08:30.533Z',
          lower: '2022-04-07T06:59:22.587Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-07T07:15:45.056Z',
          lower: '2022-04-07T07:08:31.494Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T07:18:11.175Z',
          lower: '2022-04-07T07:15:46.018Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T07:45:10.030Z',
          lower: '2022-04-07T07:15:46.018Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T07:24:56.847Z',
          lower: '2022-04-07T07:23:02.451Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T07:33:37.889Z',
          lower: '2022-04-07T07:31:43.493Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T08:17:59.775Z',
          lower: '2022-04-07T07:45:10.991Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T08:20:24.932Z',
          lower: '2022-04-07T08:18:00.736Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T08:41:38.663Z',
          lower: '2022-04-07T08:20:25.894Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-07T09:14:06.298Z',
          lower: '2022-04-07T08:41:39.624Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T08:45:59.177Z',
          lower: '2022-04-07T08:44:04.781Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T09:08:45.221Z',
          lower: '2022-04-07T09:06:50.825Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T09:26:13.059Z',
          lower: '2022-04-07T09:14:07.259Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T09:28:09.377Z',
          lower: '2022-04-07T09:26:14.020Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T09:28:09.377Z',
          lower: '2022-04-07T09:26:14.020Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T09:30:05.695Z',
          lower: '2022-04-07T09:28:10.338Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T10:39:33.951Z',
          lower: '2022-04-07T09:30:06.657Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T10:06:09.624Z',
          lower: '2022-04-07T10:04:15.224Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T10:10:59.939Z',
          lower: '2022-04-07T10:07:37.103Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T10:25:59.723Z',
          lower: '2022-04-07T10:23:33.604Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T10:50:40.122Z',
          lower: '2022-04-07T10:39:34.912Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-07T10:54:59.675Z',
          lower: '2022-04-07T10:50:41.083Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T11:03:39.742Z',
          lower: '2022-04-07T10:55:00.636Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-07T11:33:34.516Z',
          lower: '2022-04-07T11:03:40.704Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T12:05:22.737Z',
          lower: '2022-04-07T11:33:35.478Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-07T12:09:42.290Z',
          lower: '2022-04-07T12:05:23.698Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T12:11:37.647Z',
          lower: '2022-04-07T12:09:43.252Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T12:11:37.647Z',
          lower: '2022-04-07T12:09:43.252Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T12:20:16.766Z',
          lower: '2022-04-07T12:11:38.608Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T12:22:12.123Z',
          lower: '2022-04-07T12:20:17.727Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T12:22:12.123Z',
          lower: '2022-04-07T12:20:17.727Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-07T12:24:36.319Z',
          lower: '2022-04-07T12:22:13.084Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-07T12:25:06.120Z',
          lower: '2022-04-07T12:24:37.280Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T12:33:19.270Z',
          lower: '2022-04-07T12:25:07.081Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-07T12:40:05.903Z',
          lower: '2022-04-07T12:33:20.232Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-07T13:04:11.710Z',
          lower: '2022-04-07T12:40:06.865Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-07T13:29:44.060Z',
          lower: '2022-04-07T13:04:12.671Z',
          bounds: '[)',
        },
        type: 'light',
      },
    ],
    habitualSleepNeed: 2.808259e7,
    hrBaseline: null,
    id: 412774812,
    inSleepEfficiency: 0.8630755,
    isNap: false,
    kilojoules: null,
    latency: 291277,
    lightSleepDuration: 14000045,
    maxHeartRate: null,
    needFromStrain: 159327.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-07T13:25:10.282Z',
      lower: '2022-04-07T03:55:10.282Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 83.0,
    projectedSleep: 2.6631308e7,
    qualityDuration: 26631307,
    remSleepDuration: 5246207,
    respiratoryRate: 14.707031,
    responded: false,
    score: 83,
    significant: false,
    sleepConsistency: 73.0,
    sleepNeed: 3.2033067e7,
    slowWaveSleepDuration: 7385055,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 3.1147566e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-07T13:52:49.861Z',
    userId: 2051562,
    wakeDuration: 4554013,
  },
  {
    activityId: 413559697,
    algoVersion: '5.0.0',
    arousalTime: 578707.0,
    autoDetected: true,
    averageHeartRate: null,
    capTouch80th: null,
    createdAt: '2022-04-08T14:21:22.263Z',
    creditFromNaps: 0.0,
    cyclesCount: 3,
    debtPost: 7668000.0,
    debtPre: 3068987.0,
    disturbances: 4,
    during: {
      upper: '2022-04-08T14:11:05.652Z',
      lower: '2022-04-08T09:20:33.194Z',
      bounds: '[)',
    },
    events: [
      {
        during: {
          upper: '2022-04-08T09:25:20.625Z',
          lower: '2022-04-08T09:20:33.194Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T09:33:59.730Z',
          lower: '2022-04-08T09:25:21.586Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-08T09:35:56.049Z',
          lower: '2022-04-08T09:34:00.692Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-08T09:35:56.049Z',
          lower: '2022-04-08T09:34:00.692Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T09:59:02.280Z',
          lower: '2022-04-08T09:35:57.010Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-08T10:04:50.273Z',
          lower: '2022-04-08T09:59:03.241Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-08T10:10:36.344Z',
          lower: '2022-04-08T10:04:51.234Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T10:14:56.858Z',
          lower: '2022-04-08T10:10:37.305Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-08T10:28:00.323Z',
          lower: '2022-04-08T10:14:57.819Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T10:48:20.223Z',
          lower: '2022-04-08T10:28:01.285Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-08T10:48:49.062Z',
          lower: '2022-04-08T10:48:21.184Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T11:00:23.126Z',
          lower: '2022-04-08T10:48:50.023Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-08T11:02:47.322Z',
          lower: '2022-04-08T11:00:24.087Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T11:02:47.322Z',
          lower: '2022-04-08T11:00:24.087Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-08T11:04:42.679Z',
          lower: '2022-04-08T11:02:48.283Z',
          bounds: '[)',
        },
        type: 'sws',
      },
      {
        during: {
          upper: '2022-04-08T11:33:41.684Z',
          lower: '2022-04-08T11:04:43.640Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T11:11:00.473Z',
          lower: '2022-04-08T11:07:36.676Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-08T11:14:24.270Z',
          lower: '2022-04-08T11:12:27.952Z',
          bounds: '[)',
        },
        type: 'disturbances',
      },
      {
        during: {
          upper: '2022-04-08T11:53:26.989Z',
          lower: '2022-04-08T11:33:42.645Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-08T12:40:47.678Z',
          lower: '2022-04-08T11:53:27.950Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T12:45:08.205Z',
          lower: '2022-04-08T12:40:48.639Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-08T12:46:05.884Z',
          lower: '2022-04-08T12:45:09.167Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T12:51:55.800Z',
          lower: '2022-04-08T12:46:06.845Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-08T13:03:03.908Z',
          lower: '2022-04-08T12:51:56.761Z',
          bounds: '[)',
        },
        type: 'wake',
      },
      {
        during: {
          upper: '2022-04-08T13:07:25.384Z',
          lower: '2022-04-08T13:03:04.869Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T13:29:37.756Z',
          lower: '2022-04-08T13:07:26.345Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-08T13:40:43.954Z',
          lower: '2022-04-08T13:29:38.717Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T13:50:22.661Z',
          lower: '2022-04-08T13:40:44.916Z',
          bounds: '[)',
        },
        type: 'rem',
      },
      {
        during: {
          upper: '2022-04-08T14:00:29.259Z',
          lower: '2022-04-08T13:50:23.623Z',
          bounds: '[)',
        },
        type: 'light',
      },
      {
        during: {
          upper: '2022-04-08T14:11:04.691Z',
          lower: '2022-04-08T14:00:30.220Z',
          bounds: '[)',
        },
        type: 'sws',
      },
    ],
    habitualSleepNeed: 2.8082242e7,
    hrBaseline: null,
    id: 413559697,
    inSleepEfficiency: 0.8094386,
    isNap: false,
    kilojoules: null,
    latency: 0,
    lightSleepDuration: 7305162,
    maxHeartRate: null,
    needFromStrain: 990592.0,
    noDataDuration: 0,
    normal: true,
    optimalSleepTimes: {
      upper: '2022-04-08T13:44:45.021Z',
      lower: '2022-04-08T04:14:45.021Z',
      bounds: '[)',
    },
    percentRecorded: 1.0,
    projectedScore: 44.0,
    projectedSleep: 1.4109726e7,
    qualityDuration: 14109726,
    remSleepDuration: 3450902,
    respiratoryRate: 15.498047,
    responded: false,
    score: 44,
    significant: false,
    sleepConsistency: 38.0,
    sleepNeed: 3.2141822e7,
    slowWaveSleepDuration: 3353662,
    source: 'auto',
    state: 'complete',
    surveyResponseId: null,
    teamActId: null,
    timeInBed: 1.7431497e7,
    timezoneOffset: '-0400',
    updatedAt: '2022-04-08T14:21:23.543Z',
    userId: 2051562,
    wakeDuration: 3344041,
  },
];
