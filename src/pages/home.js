import React from 'react'
// import { Link } from 'react-router-dom';

class Home extends React.Component {
    // componentDidMount() {
    //     document.getElementById('create-title').onclick = function () {
    //         var dropDown = document.getElementById('create-toggle').getAttribute('class');
    //         dropDown = dropDown === 'show-inline-block' ? '' : 'show-inline-block'; 

    //         document.getElementById('create-toggle').setAttribute('class', dropDown);
    //     }
    // }

    // render() {
    //     return (
    //         <body>
    //             <head>
    //                 <meta charset="UTF-8"></meta>
    //                 <title>SimplePhy - Quick online psychophysics experiments for all</title>
    //                 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    //                 <Link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"/>
    //                 {/* <script src="js/jquery.key.js"></script> */}
    //                 <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    //                 <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    //                 <script src="https://cdn.jsdelivr.net/npm/mobile-detect@1.4.4/mobile-detect.min.js"></script>
    //                 {/* <script src="js/functions.js"></script>
    //                 <script src="js/main.js"></script>
    //                 <script src="js/grid.js"></script>
    //                 <script src="js/google_drive.js"></script> */}
    //                 <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito">
    //                 <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
    //                 <Link rel="stylesheet" type="text/css" href="/css/style.css"/></Link>
    //             </head>
                
    //             <div class="background">
    //                 <div id="form-container">
    //                     <img src={"./simple_phy.svg"} class="logo" width="600" alt="Coudn't load"></img>

    //                     <p class="home-instructions"><strong>Try the test experiment: </strong>Enter your participant ID and click
    //                         on Start. Calibration will start first.</p>

    //                     <div class="credits" style={{whiteSpace: 'pre-line'}}>Developed by <a
    //                             href="javascript:location='mailto:\u006d\u0069\u0067\u0075\u0065\u006c\u0061\u006e\u0067\u0065\u006c\u002e\u006c\u0061\u0067\u006f\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">Miguel
    //                             Lago{"\n"}</a>
    //                         <a id="version" href="https://gitlab.com/malago/simplephy" target="_blank" rel="noreferrer">version</a>
    //                     </div>

    //                     <div class="credits" style={{left:'5%', width:'25%', textAlign:'left'}}><a
    //                         href="https://doi.org/10.3758/s13428-020-01515-z" target="_blank" rel="noreferrer">Lago, Miguel A., “SimplePhy: An
    //                         open-source tool for quick online perception experiments”. <i>Behav. Res</i> (2020)
    //                         </a>
    //                     </div>

    //                     <div class="error" style={{display:'none'}}></div>

    //                     <div class="dev">
    //                         <pre id="content" style={{whiteSpace: "pre-wrap;"}}></pre>
    //                     </div>

    //                     <p id="local-drive-files" style={{display:'none'}}>
    //                         <label for="local-drive-experiment" class="file-upload">
    //                             <i class="fa fa-cloud-upload"></i> Choose stimuli folder
    //                         </label>
    //                         <input type="file" id="local-drive-experiment" name="fileListExperiment" webkitdirectory multiple />
    //                     </p>

    //                     <p><input id="name" type="text" placeholder="Participant ID" /* value="" */ /> <input type="button"
    //                             id="start-experiment" value="Start!" />
    //                         {/* <span id="google-login" class="hidden">
    //                             <button id="authorize_button" onclick="handleAuthClick();" style={{padding:'5px'}}
    //                                 title="Login with Google"><i class="fab fa-google"></i></button>
    //                             <button id="signout_button" style={{display: 'none'}} onclick="handleSignoutClick();"
    //                                 title="Sign Out from Google"><i class="fas fa-sign-out-alt"></i></button>
    //                         </span> */}
    //                     </p>

    //                     <p>By clicking on Start you accept the experiment conditions and consent form (if given).</p>

    //                     <form class="form-box" id="form-box">
    //                         <div class="created">
    //                             <p style={{fontWeight: 'bold', borderBottom: '2px solid white', margin: 'auto', marginBottom: '15px', width: '80%'}}> 
    //                                 <i class="fas fa-search"></i> Your latest created experiments</p>
    //                             <ul class="created-list">

    //                             </ul>
    //                         </div>

    //                         <p style={{
    //                             fontWeight: 'bold', borderBottom: '2px solid white', margin: 'auto', marginBottom: '15px', width: '80%'}} id="create-title">
    //                             <i class="far fa-plus-square icon"></i> Create experiment
    //                         </p>

    //                         <div id="create-toggle" class="">
    //                             <div title="Generate advanced options" id="advanced-options"><i
    //                                     class="fas fa-external-link-alt"></i></div>
    //                             <p>
    //                                 <h3><a href="https://gitlab.com/malago/simplephy/-/wikis/home" target="_blank" rel="noreferrer">See tutorial</a></h3>
    //                             </p>

    //                             <table>
    //                                 <tr>
    //                                     <th>Title</th>
    //                                     <td><input id="title" type="text" style={{width:'100%', textAlign:'center'}}
    //                                             placeholder="optional" /></td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>Instructions URL</th>
    //                                     <td><input id="instructions" type="text" placeholder="optional"
    //                                             style={{width:'100%', textAlign:'center'}} /></td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th># ratings</th>
    //                                     <td>
    //                                         <div id="slider-value">8</div>
    //                                         <div class="slidecontainer">
    //                                             <input type="range" min="1" max="12" value="8" class="slider" id="ratings"/>
    //                                         </div>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>Allowed keys <i title="Comma-separated list of allowed keyboard key codes to continue"
    //                                             class="tooltip far fa-question-circle"></i></th>
    //                                     <td>
    //                                         <input id="keys" type="text" value="Space"
    //                                             style={{fontSize:'80%', color:'#b7b7b7', width:'60%', textAlign:'center', float: 'left', lineHeight: '23px'}}
    //                                             disabled="disabled" />
    //                                         <div id="generate-keys" class="button"
    //                                             style={{borderWidth: '1px', height: '100%', margin: 0, display: 'block', float: 'right', lineHeight: '5px',
    //                                             marginLeft: '2px', fontSize: '80%'}} />
    //                                         Edit...
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>Randomize trials</th>
    //                                     <td>
    //                                         <select id="randomize" style={{width:'100%', fontSize:'16px', marginTop:0, height:'26px'}}>
    //                                             <option value="all" title="Randomize all trials regardless of the condition">Randomize all
    //                                             </option>
    //                                             <option value="consecutiverandom"
    //                                                 title="Consecutive conditions, randomize trial order for each condition (only for conditions with same number of trials)">
    //                                                 Consecutive conditions, random trials</option>
    //                                             <option value="randomrandom"
    //                                                 title="Block conditions and randomize their order, randomize trials inside the conditions">
    //                                                 Random blocks, random trials</option>
    //                                             <option value="keeprandom"
    //                                                 title="Block conditions and keep their order, randomize trials inside the conditions">
    //                                                 Ordered blocks, random trials</option>
    //                                             <option value="randomkeep"
    //                                                 title="Block conditions and randomize their order, keep trial order inside the conditions">
    //                                                 Random blocks, ordered trials</option>
    //                                             <option value="keepkeep" title="Keep order for conditions and trials inside the conditions">
    //                                                 Do not randomize</option>
    //                                         </select>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>Multiple stimuli <i title="Behavior if several images are found in each stimulus folder"
    //                                             class="tooltip far fa-question-circle"></i></th>
    //                                     <td>
    //                                         <select id="multiple" style={{fontSize:'16px', marginTop:0, height:'26px', width:'100%'}}>
    //                                             <option value="first" title="Trial images will be displayed sequentially">Sequential
    //                                                 (default)</option>
    //                                             <option value="MAFC" title="Trial images will be shown in a 2D grid">MAFC (grid)</option>
    //                                             <option value="MAFCcircle" title="Trial images will be shown in a circle">MAFC (circle)
    //                                             </option>
    //                                             <option value="3D" title="Trial images will be shown as a stack of 2D images">3D scroll
    //                                             </option>
    //                                         </select>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>Calibration interval (min)<i
    //                                             title="Activate estimation of reading distance. Recalibration interval in minutes, set to empty or 0 to disable"
    //                                             class="tooltip far fa-question-circle"></i></th>
    //                                     <td><input id="calibration" type="number" placeholder="calibration"
    //                                             style={{width:'100%', textAlign:'center'}} /></td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>Trial timeout (ms) <i title="In milliseconds, set to empty or 0 to disable"
    //                                             class="tooltip far fa-question-circle"></i></th>
    //                                     <td><input id="timeout" type="text" placeholder="optional" style={{width:'100%', textAlign:'center'}} />
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td colspan="2"><input id="mark" type="checkbox" name="mark"
    //                                             style={{width:'100%', textAlign:'center'}} /><label for="mark">Marks <i
    //                                                 title="Allow double click to create marks"
    //                                                 class="tooltip far fa-question-circle"></i></label> <input id="fixationGrid"
    //                                             type="checkbox" style={{width:'100%', textAlign:'center'}} name="fixationGrid" /><label
    //                                             for="fixationGrid">Fixation Grid <i
    //                                                 title="Activate to show a fixation grid and ask the participant which code they saw"
    //                                                 class="tooltip far fa-question-circle"></i></label></td>
    //                                 </tr>
    //                             </table>
    //                             <input type="button" id="google-drive-select" value="Find stimuli on Google Drive" />
    //                             <input type="button" id="local-drive-select" value="Find stimuli locally"  />
    //                             <p>
    //                                 <input type="button" id="create-experiment" value="Create experiment" class="disabled" />
    //                             </p>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </body>
    //     )
    // }
}

export default Home