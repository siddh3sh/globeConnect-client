(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\"> \n    <div class=\"container\">\n        <div class=\"media center\">\n            <div class=\"box\">\n                <div class=\"media-content\">\n                    <div class=\"content\">\n                        <h1 class=\"title is-size-2\">\n                            About Us\n                        </h1>\n                        <p>\n                            <span>Globe Connect is made with the vision to provide a common platform for people to share their experiences, knowledge, discuss ideas and unite as a comunity</span> <br>\n                            <br>\n                            <!-- <span> I developed this site as my CDAC project.\n                            What started as just an academic  project soon became my passion as my skills and vision developed.\n                            I learned many useful things as I overcame every obstacle and tried to make it as relevent as possible.\n                            I would like to thank everyone for their support, guidence and feedback.</span> <br><br>\n                            <span>~Siddhesh and Aditya</span>   -->\n\n                            <span> I developed this site as my CDAC project.\n                                What started as just an academic  project soon became my passion as my skills and vision developed.\n                                I learned many useful things as I overcame every obstacle and tried to make it as relevent as possible.\n                                I would like to thank everyone for their support, guidence and feedback.</span> <br><br>\n                                <span>~<strong>Siddhesh</strong></span> \n                        </p><br>\n\n                        <a href=\"https://www.linkedin.com/in/siddhesh-mate-387355b1\">\n                            <figure class=\"image is-128x128\">\n                            <img class=\"is-rounded\" src=\"assets/siddhesh.png\">\n                            </figure>\n                        </a>\n                        <!-- <a href=\"https://www.linkedin.com/in/aditya-dhopade-4a32231b\">\n                            <figure class=\"image is-128x128\">\n                            <img class=\"is-rounded\" src=\"assets/DSC_0017.JPG\">\n                            </figure>\n                        </a>     -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-forum/add-forum.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-forum/add-forum.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>add-forum works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-profile-pic/add-profile-pic.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-profile-pic/add-profile-pic.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <header class=\"card-header\">\n      <p class=\"card-header-title\">\n        Update Profile Picture\n      </p>\n      \n    </header>\n    <div class=\"card-content\">\n      <div class=\"content\">\n        <div>\n            <input (change)=\"onSelectThumbnail($event)\" type=\"file\" name=\"profilepic\" id=\"file\">\n            <label for=\"file\">Choose File</label>\n            <button type=\"button\" (click)=\"onAdd()\" >\n                Submit\n            </button>\n        </div>\n        \n      </div>\n    </div>\n    <footer class=\"card-footer\">\n      \n    </footer>\n  </div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<hr>\n<div class=\"columns is-mobile\">\n  <div class=\"column is-3\">\n    <aside class=\"menu\">\n      <p class=\"menu-label\">\n        Website Activity\n      </p>\n      <ul class=\"menu-list\">\n        <!-- <li><a>Total Posts: {{user.posts.length}}</a></li>\n        <li><a>Total Comments: {{user.comments.length}}</a></li> -->\n      </ul>\n      <p class=\"menu-label\">\n        All Interests\n      </p>\n      <!-- <ul *ngFor=\"let f of user.forums\" class=\"menu-list\">\n          <li><a>{{f.name}}</a></li>   \n      </ul> -->\n      <p class=\"menu-label\">\n        -------------------------\n      </p>\n      \n      <ul class=\"menu-list\">\n        <li><a>Account Settings</a></li>\n        <li><a>About Us</a></li>\n        <li><a>Privacy Policy</a></li>\n      </ul>\n    </aside>\n  </div>\n    <!-- <div class=\"column is-3 is-left\">\n        <aside class=\"menu\">\n            <p class=\"menu-label\">\n              Website Activity\n            </p>\n            <ul class=\"menu-list\">\n              <li><a>Total Posts: {{user.posts.length}}</a></li>\n              <li><a>Total Comments: {{user.comments.length}}</a></li>\n            </ul>\n            <p class=\"menu-label\">\n              All Interests\n            </p>\n            <ul *ngFor=\"let f of user.forums\" class=\"menu-list\">\n                <li><a>{{f.name}}</a></li>   \n            </ul>\n            <p class=\"menu-label\">\n              -------------------------\n            </p>\n            \n            <ul class=\"menu-list\">\n              <li><a>Account Settings</a></li>\n              <li><a>About Us</a></li>\n              <li><a>Privacy Policy</a></li>\n            </ul>\n          </aside>\n    </div> -->\n\n\n  \n\n  <!--LIST OF ALL USERS-->\n    \n    \n    <div class=\"table-container\">\n      <div class=\"column is-8\">\n        <table class=\"table\">\n        <thead>\n            <tr>\n                <th><abbr title=\"Id\">ID</abbr></th> \n                <th><abbr title=\"Name\">NAME</abbr></th> \n                <th><abbr title=\"Email\">EMAIL</abbr></th>\n                <th><abbr title=\" Block User\">BLOCK USER</abbr></th> \n                <th><abbr title=\" Delete User\">DELETE USER</abbr></th> \n            </tr>   \n        </thead>   \n                                \n            <tbody>\n                    <tr *ngFor=\"let u of allUsers; let i = index\">\n                        <th>{{i+1}}</th>\n                        <th>{{u.name}}</th>\n                        <th>{{u.username}}</th>\n                        <th>{{u.email}}</th>\n                        <th><a id=\"block-btn\" (click)=\"blockUser(i)\" class=\"button is-medium is-link is-rounded is-focused\">BLOCK</a></th>\n                        <th><a (click)=\"deleteUser(i)\" class=\"button is-medium is-rounded is-focused\">DELETE</a></th>\n                    </tr>\n            </tbody>  \n        </table>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-show-post></app-show-post> -->\n\n<!-- <app-login></app-login> -->\n<div><app-nav-bar></app-nav-bar></div>\n<router-outlet></router-outlet>\n\n<!-- <app-add-profile-pic></app-add-profile-pic> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>default works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-user/delete-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-user/delete-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>delete-user works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discussion/discussion.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discussion/discussion.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <app-nav-bar></app-nav-bar> -->\n<hr>\n<div class=\"columns\">\n    <div class=\"column is-one-quarter\">\n    </div>\n    <div class=\"column is-half\">\n        <section *ngIf=\"thread\">\n            \n            <!-- <div class=\"container\">\n                <article class=\"media\">\n                        <figure class=\"media-left\">\n                        <p class=\"image is-64x64\">\n                            <img src=\"https://bulma.io/images/placeholders/128x128.png\">\n                        </p>\n                        </figure>\n                        <div class=\"media-content\">\n                        <div class=\"field\">\n                            <p class=\"control\">\n                            <textarea class=\"textarea\" placeholder=\"Start A Discussion\"></textarea>\n                            </p>\n                        </div>\n                        <nav class=\"level\">\n                            <div class=\"level-left\">\n                            <div class=\"level-item\">\n                                <a class=\"button is-info\">Submit</a>\n                            </div>\n                            </div>\n                            \n                        </nav>\n                        </div>\n                    </article>\n            </div>  -->\n            <br>\n            <br>\n\n                <div class=\"container\">\n                    <!--MAIN POST-->\n                    <article class=\"message is-dark\">\n                      <div class=\"level message-header\">\n                        <div class=\"columns\">\n                          <div class=\"column is-3\">\n                            <figure class=\"level-left\">\n                              <p class=\"image is-32x32\">\n                                <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{thread.post.user.profilePic}}\">\n                              </p>\n                            </figure>\n                          </div>\n                        \n                          <div class=\"column is-4\">\n                              <p>\n                                <strong>{{thread.post.user.username}}</strong> \n                              </p>\n                          </div>\n                          <div class=\"column is-2 is-offset-8\">\n                            <small>{{thread.post.creation_date}}</small>\n                          </div>\n                          <br>\n                        </div>\n                      </div>\n                      <div class=\"message-body\">\n                        <p class=\"title\">{{thread.post.title}}</p>\n                        <p>{{thread.post.content}}</p>      \n                      </div>\n                                <hr>\n                      <div class=\"columns\">\n                        \n                        <nav class=\"level is-mobile\">\n                            <div class=\"level-left\">\n                                <div class=\"column is-2\">\n                                    \n                                    <button (click)=\"incLikes(thread.post._id)\" class=\"button is-small\">\n                                    <span class=\"icon is-medium\"><i class=\"fas fa-arrow-up\" ></i></span>\n                                    </button>  \n                                </div>\n                                <div class=\"column is-6 is-offset-2\">\n                                    <p> {{thread.post.likes}} Upvotes </p>\n                                </div>\n                                <div class=\"column is-2 is-offset-2\">\n                                    <button class=\"button is-small\">\n                                        <span class=\"icon is-small\"><i class=\"fas fa-comment\"></i> </span>\n                                    </button>\n                                </div>\n                            </div>\n                        </nav>\n                      </div>\n                              \n                                \n                            \n                      \n                    </article>\n\n                    \n\n                    <!--COMMENT BOX-->\n\n                    <article *ngIf=\"isLoggedIn()\" class=\"media\">\n                        <div class=\"media-content\">\n                          <div class=\"field\">\n                            <p class=\"control\">\n                              <textarea [(ngModel)]=\"comment\" name=\"comment\" class=\"textarea\" placeholder=\"Add a comment...\"></textarea>\n                            </p>\n                          </div>\n                          <div class=\"field\">\n                            <p class=\"control\">\n                              <button (click)=\"postComment()\" class=\"button\">Post comment</button>\n                            </p>\n                          </div>\n                        </div>\n                    </article>\n\n                    <br><br>\n\n                    <!--List Of COMMENTS-->\n                    <!--Inplement Later-->\n                    <!-- <article class=\"message is-small\">\n                      <div class=\"message-header\">\n                        <p>Small message</p>\n                        <button class=\"delete is-small\" aria-label=\"delete\"></button>\n                      </div>\n                      <div class=\"message-body\">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.\n                      </div>\n                    </article> -->\n                  <div class=\"columns\">\n                    <div class=\"column is-11 is-offset-1\">\n                      <div *ngFor=\"let c of thread.comment; let i = index\">\n                        <br>\n                          <article class=\"media is-dark\">\n                            \n                            <figure class=\"media-left\">\n                              <p class=\"image is-32x32\">\n                                <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{c.user.profilePic}}\">\n                              </p>\n                            </figure>\n                            <div class=\"media-content\">\n                              <div class=\"message is-dark\">\n                                <div class=\"message-body\">\n                                  <div class=\"content\">\n                                    <p>\n                                      <strong>{{c.user.username}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<small>{{c.creation_date}}</small>\n                                    </p>\n                                    <hr>\n                                    <p> \n                                      {{c.content}}\n                                      <br>\n                                    </p> \n                                    \n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </article>\n                          \n                      </div>\n                    </div>\n                </div>\n                    \n                \n              </div>\n            \n            \n                    \n        </section>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar> -->\n\n<!--Modal open-->\n<!-- <div id=\"mod\" class=\"modal hidden\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-content\">\n        <table class=\"table is-bordered\">\n            \n            <app-add-profile-pic></app-add-profile-pic>\n            \n        </table>\n      \n    </div>\n    <button (click)=\"removeModal()\" class=\"modal-close is-large\" aria-label=\"close\"></button>\n</div> -->\n<!--Modal close-->\n\n<div *ngIf=\"pageBody\">\n    <div class=\"columns\">\n        <div class=\"column is-half is-offset-3\">\n            <!--FORUM DETAILS-->\n            <section class=\"hero is-info is-bold\">\n                <div class=\"hero-body\">\n                    \n                        <nav class=\"level\">\n                            <a>\n                                <div class=\"container is-vcentered has-image-\">\n                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n                                        <figure class=\"image is-128x128 \">\n                                                \n                                                <img class=\"is-rounded\" src=\"\">\n                                        </figure>\n                                        \n                                </div>\n                            </a> \n                            \n                            <div class=\"container has-text-left\"> \n                            \n                                    <h1 class=\"title has-text-left\">\n                                            {{pageBody.forum.name}} \n                                    </h1>\n                                    <h2 class=\"subtitle has-text-left\">\n                                            {{pageBody.forum.description}}\n                                    </h2>\n                                \n                            </div> \n                            <!-- <div class=\"container has-text-justified\"> \n                                \n                                    <div class=\"tags are-medium has-addons\">\n                                            <span class=\"tag\">Followers</span>\n                                            <span class=\"tag is-primary\">4k people</span>\n                                    </div>\n                                                    \n                            </div> -->\n\n\n                        </nav>\n                    \n                </div> \n            </section>\n            <hr>\n        </div>\n    </div>\n    <div class=\"columns\">\n\n        <!--SIDE PANEL-->\n        <div class=\"column is-1\"></div>\n        <div class=\"column is-2 is-left\">\n            <aside class=\"menu\">\n                <p class=\"menu-label\">\n                Activity\n                </p>\n                <ul class=\"menu-list\">\n                <li><a>Posts: {{pageBody.forumPosts.length}}</a></li>\n                <li><a>Forum Followers: {{pageBody.forumUsers.length}}</a></li>\n                </ul>\n                <!-- <p class=\"menu-label\">\n                Interests\n                </p>\n                <ul *ngFor=\"let f of user.forums\" class=\"menu-list\">\n                    <li><a>{{f.name}}</a></li>\n                    \n                </ul> -->\n                <p class=\"menu-label\">\n                -------------------------\n                </p>\n                \n                <ul class=\"menu-list\">\n                <li><a>Account Settings</a></li>\n                <li><a>About Us</a></li>\n                <li><a>Privacy Policy</a></li>\n                </ul>\n            </aside>\n        </div>\n\n\n        <div class=\"column is-half\">\n            <!--FORUM POSTS-->\n            <section>\n                <div *ngFor=\"let p of pageBody.forumPosts;let i = index\">\n                    <br><br>\n                    <!-- <a routerLink=\"/d/{{p._id}}\" >\n                        <div class=\"box\">\n                            <div class=\"media-content\">\n                                \n                                    <div class=\"content\">\n                                        <div class=\"columns\">\n                                            <div class=\"column is-2\">\n                                                <figure class=\"media-left\">\n                                                    <p class=\"image is-32x32\">\n                                                        <img class=\"is-rounded\" src=\"http://localhost:9669/{{p.user.profilePic}}\">\n                                                    </p>\n                                                </figure>\n                                            </div>\n                                            \n                                                \n                                            <div class=\"column is-6\"><strong>{{p.user.username}}</strong></div> <div class=\"column is-12\"><small>{{p.creation_date}}</small></div>\n                                            <br>\n                                        </div>\n                                        <div>\n                                            <p class=\"title\">{{p.title}}</p>\n                                        </div>\n                                        <div class=\"column is-11\"><p>{{p.content}}\n                                        </p></div>\n                                    </div>\n                                    <nav class=\"level is-mobile\">\n                                        <div class=\"level-left\">\n                \n                                            <a class=\"level-item\">\n                                            <span class=\"icon is-small\"><i></i></span>\n                                            </a>\n                                            <a class=\"level-item\">\n                                                <span class=\"icon is-small\"><i class=\"fas fa-comment\"></i> </span>\n                                            </a>\n                                        </div>\n                                    </nav>\n                            </div> \n                        </div>\n                    </a> -->\n                    \n                    <div style=\"border-style: outset;\" class=\"has-background-white\">\n                        <article class=\"media notification is-info\">\n                            <figure class=\"media-left\">\n                                <p class=\"image is-32x32\">\n                                    <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{p.user.profilePic}}\">\n                                </p>\n                            </figure>\n                            <div class=\"media-content\">\n                                \n                                <div class=\"content\">\n                                    <p>\n                                        <strong>{{p.user.username}}</strong>\n                                          <br>      \n                                        <small>{{p.creation_date | date:'short'}}</small>      \n                                    </p>     \n                                           \n                                </div>            \n                               \n                            </div>\n                        </article>\n                        <div class=\"section\" style=\"padding-top: 0; padding-bottom: 20px;\">\n                            \n                                <h3 class=\"title is-size-5\">{{p.title}}</h3>\n    \n                                <h4 class=\"subtitle is-size-7\">{{p.content}}</h4>\n                            \n                        </div>\n                        \n                        \n    \n                        <div class=\"columns\">\n                            \n                            <nav class=\"level is-mobile\">\n                                <div class=\"level-left\">\n                                    <div class=\"column is-2\">\n                                        \n                                        <button (click)=\"incLikes(i)\" class=\"button\">\n                                        <span class=\"icon is-medium\"><i class=\"fas fa-arrow-up\" ></i></span>\n                                        </button>  \n                                    </div>\n                                    <div class=\"column is-6 is-offset-2\">\n                                    <p> {{p.likes}} Upvotes </p>\n                                    </div>\n                                    <div class=\"column is-2 is-offset-2\">\n                                        <button routerLink=\"/d/{{p._id}}\" class=\"button\">\n                                            <span class=\"icon is-small\"><i class=\"fas fa-comment\"></i> </span>\n                                        </button>\n                                    </div>\n                                    \n                                </div>\n                            </nav>\n                            \n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n\n        <!--Forum Followers-->\n        <div id=\"desktop\" class=\"column is-3 is-offset-1\">\n            <p><strong>Followers</strong></p>\n            <div *ngFor=\"let u of pageBody.forumUsers\">\n                \n                    <figure class=\"has-image-\">\n                        <div class=\"tooltip\">\n                        <p class=\"image is-64x64\">\n                            \n                                <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{u.profilePic}}\">\n                                \n                            \n                        </p> \n                        <span class=\"tooltiptext\"><strong>{{u.username}}</strong></span> \n                    </div>  \n                    </figure>\n\n                    \n                \n                \n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div> \n        </div>\n        \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div><app-nav-bar></app-nav-bar></div> -->\n<hr>\n\n<div class=\"section\">\n  <div class=\"container\">\n    <div class=\"columns\">\n      <!--SIDE PANEL-->\n      <div class=\"column is-one-quarter\">\n          <!--  \n              <p class=\"panel-heading has-background-white\">\n                Forums\n              </p>\n              \n              <a class=\"panel-block\">\n                <span class=\"panel-icon has-background-white\">\n                  <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\n                </span>\n                SPORTS\n              </a>\n              <a class=\"panel-block\">\n                <span class=\"panel-icon\">\n                  <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\n                </span>\n                PHILOSOPHY\n              </a>\n              <a class=\"panel-block\">\n                <span class=\"panel-icon\">\n                  <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\n                </span>\n                PROGRAMMING\n              </a>\n              <a class=\"panel-block\">\n                  <span class=\"panel-icon\">\n                    <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\n                  </span>\n                  GAMING  \n              </a>\n              <a class=\"panel-block\">\n                  <span class=\"panel-icon\">\n                    <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\n                  </span>\n                  POLITICS\n              </a>\n            </nav> -->\n      </div>\n      \n\n      <!--FEED-->\n      <div class=\"column is-half\">\n          <section>\n              \n            <app-show-post></app-show-post>\n                \n                      \n          </section>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/interest/interest.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interest/interest.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar> -->\n\n<!-- <section>\n    <nav class=\"level\">\n     <div class=\"container\">\n         <div class=\"column is-4\">\n\n         </div>\n     </div>   \n     <div class=\"container\">\n         <h1 class=\"title is-italic\">   \n                 INTERESTS YOU CAN FOLLOW\n         </h1>     \n     </div>\n </nav>\n</section>     -->\n<hr>\n<section class=\"section\">\n         \n        <div class=\"container\">\n\n                <div class=\"columns is-multiline\">\n                        <div *ngFor=\"let f of forums; let i = index\" class=\"level centered\">\n                                \n                                        <div class =\"column is-one-third\">\n                                                \n                                                <article class=\"media\">\n                                                        <div class=\"media-content\">\n                                                                <div class=\"content\">\n                                                                        <div class=\"card\">\n                                                                                <div class=\"card-content has-content-centered\">\n                                                                                        <figure class=\"image is-128x128 is-\">\n                                                                                                <img class=\"is-rounded\" src=\"https://bulma.io/images/placeholders/128x128.png\">\n                                                                                        </figure>\n                                                                                        <h1 class=\"title\">\n                                                                                                {{f.name}}\n                                                                                        </h1>\n                                                                                        <br>\n                                                                                        <p class=\"subtitle is-size-5\">\n                                                                                                {{f.description}}\n                                                                                        </p>\n                                                                                </div>\n                                                                                <footer class=\"card-footer\">\n                                                                                <p class=\"card-footer-item\">\n                                                                                        <span>\n                                                                                                <button (click)=\"followForum(i)\" class=\"button is-link is-outlined\">Follow</button>\n                                                                                        </span>\n                                                                                </p>\n                                                                                <p class=\"card-footer-item\">\n                                                                                        <span>\n                                                                                                <button routerLink=\"/forum/{{f._id}}\" routerLinkActive=\"router-link-active\"  class=\"button is-link is-outlined\">View Posts</button>\n                                                                                        </span>\n                                                                                </p>\n                                                                                </footer>\n                                                                        </div>\n                                                                </div>\n                                                        </div>\n                                                </article>\n                                        </div>\n                                \n                        </div>\n                </div>\n        </div> \n        \n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    \n\n\n<!-- <div class=\"container\">\n\n<form (ngSubmit)=\"validateUser()\" role=\"form\">\n    <legend>Form title</legend>\n\n    <div class=\"form-group\">\n        <label for=\"email\">label</label>\n        <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"pwd\">label</label>\n        <input [(ngModel)]=\"password\" name=\"email\" type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Input field\">\n    </div>\n\n    \n\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n</div> -->\n\n<section class=\"hero is-dark is-bold is-fullheight\">\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <div class=\"columns is-centered\">\n          <div class=\"column is-5-tablet is-4-desktop is-3-widescreen\">\n            <form action=\"\" class=\"box\">\n              <div class=\"field\">\n                <label for=\"em\" class=\"label\">Email</label>\n                <div class=\"control has-icons-left\">\n                  <input [(ngModel)]=\"email\" name=\"email\" id=\"em\" type=\"email\" placeholder=\"e.g. bobsmith@gmail.com\" class=\"input\" required>\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-envelope\"></i>\n                  </span>\n                </div>\n              </div>\n              <div class=\"field\">\n                <label for=\"pwd\" class=\"label\">Password</label>\n                <div class=\"control has-icons-left\">\n                  <input [(ngModel)]=\"password\" id=\"pwd\" name=\"password\" type=\"password\" placeholder=\"*******\" class=\"input\" required>\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-lock\"></i>\n                  </span>\n                </div>\n              </div>\n              <div class=\"field\">\n                <label for=\"\" class=\"checkbox\">\n                  <input type=\"checkbox\">\n                 Remember me\n                </label>\n              </div>\n              <div class=\"field\">\n                <button (click)=\"validateUser()\" class=\"button is-dark\">\n                  Login\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!isLoggedIn();else changeNav\">\n  <nav class=\"navbar\">\n      <div class=\"navbar-brand\">\n        <!-- <a class=\"navbar-item\" href=\"https://bulma.io\">\n          <img src=\"\" width=\"112\" height=\"28\">\n        </a> -->\n        <a class=\"navbar-item\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >\n          <!-- <img src=\"\" width=\"112\" height=\"28\"> -->\n          \n            \n          <p> <img  src=\"assets/logo.png\">   <img src=\"assets/globeconnectTrans.png\">\n            \n        \n        </a>\n        <div (click)=\"toggleBurger()\" class=\"navbar-burger burger\" id=\"burger\" data-target=\"navbarExampleTransparentExample\">\n          \n          <span></span>\n          <span></span>\n          <span></span>\n        \n      </div>\n      </div>\n    \n      <div id=\"navbarExampleTransparentExample\" class=\"navbar-menu\">\n          <div class=\"navbar-start\">\n              <a class=\"navbar-item\" href=\"\">\n            \n              </a>\n              \n          </div>\n          <div class=\"navbar-item\">\n              <input [(ngModel)]=\"searchQ\" name=\"searchQ\" class=\"navbar-item input is-rounded\" type=\"text\" placeholder=\"search\" required>\n              <span>\n                <button (click)=\"searchPost()\" class=\"\">\n                  <span class=\"icon is-small\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n                </button>\n              </span>\n          </div>\n        \n    \n        <div class=\"navbar-end\">\n          <div class=\"navbar-item\">\n            <div class=\"navbar-item has-dropdown is-hoverable\">\n              <a class=\"navbar-link\">\n                  Profile\n              </a>\n                <div class=\"navbar-dropdown is-boxed\">\n                    <a class=\"navbar-item\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >\n                    Profile\n                    </a>\n                    <a class=\"navbar-item\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" >\n                      Home\n                    </a>\n                    <a class=\"navbar-item\" [routerLink]=\"['/interests']\" routerLinkActive=\"router-link-active\" >\n                      Interest\n                    </a>\n                    <a class=\"navbar-item\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" >\n                      \n                    </a>\n                    <a class=\"navbar-item\" [routerLink]=\"['/privacy-policy']\" routerLinkActive=\"router-link-active\" >\n                      Privacy Policy\n                    </a>\n                    <hr class=\"navbar-divider\">\n                    <a class=\"navbar-item\" [routerLink]=\"['/about-us']\" routerLinkActive=\"router-link-active\" >\n                      About Us\n                    </a>\n                    \n                </div>\n              </div>\n            <div class=\"field is-grouped\">\n              <p class=\"control\">\n                <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\"  class=\"bd-tw-button button\">\n                  \n                  <span>\n                    Login In\n                  </span>\n                </a>\n              </p>\n              <p class=\"control\">\n                <a [routerLink]=\"['/sign-up']\" routerLinkActive=\"router-link-active\"  class=\"button is-primary\">\n                  \n                  <span>Sign Up</span>\n                </a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n  </nav>\n</div>\n<ng-template #changeNav>\n  <nav class=\"navbar \">\n      <div class=\"navbar-brand\">\n        <a class=\"navbar-item\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >\n          <!-- <img src=\"\" width=\"112\" height=\"28\"> -->\n          \n            \n          <p> <img  src=\"assets/logo.png\">   <img src=\"assets/globeconnectTrans.png\">\n            \n        \n        </a>\n        <!--Hamburger-->\n          <!-- <p class=\"is-size-2\">GLOBE CONNECT <br><p class=\"is-size-6\">  global discussion forum</p></p> -->\n        <div (click)=\"toggleBurger()\" class=\"navbar-burger burger\" id=\"burger\" data-target=\"navbarExampleTransparentExample\">\n          \n            <span></span>\n            <span></span>\n            <span></span>\n          \n        </div>\n      </div>\n    \n      <div id=\"navbarExampleTransparentExample\" class=\"navbar-menu\">\n          <div class=\"navbar-start\">\n            <a class=\"navbar-item\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" ></a>\n              \n          </div>\n          <div class=\"navbar-item\">\n            <input [(ngModel)]=\"searchQ\" name=\"searchQ\" class=\"navbar-item input is-rounded\" type=\"text\" placeholder=\"search\" required>\n            <span>\n              <button (click)=\"searchPost()\" class=\"\">\n                <span class=\"icon is-small\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n              </button>\n            </span>\n          </div>\n        \n    \n        <div class=\"navbar-end\">\n          <div class=\"navbar-item\">\n            <div class=\"navbar-item has-dropdown is-hoverable\">\n              <a class=\"navbar-link\">\n                  Profile\n              </a>\n              <div class=\"navbar-dropdown is-boxed\">\n                  <a class=\"navbar-item\" [routerLink]=\"['/profile']\" routerLinkActive=\"router-link-active\" >\n                  Profile\n                  </a>\n                  <a class=\"navbar-item\" [routerLink]=\"['/interests']\" routerLinkActive=\"router-link-active\" >\n                  Interests\n                  </a>\n                  <a class=\"navbar-item\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" >\n                    Home\n                  </a>\n                  <a class=\"navbar-item\" [routerLink]=\"['/settings']\" routerLinkActive=\"router-link-active\" >\n                  Settings\n                  </a>\n                  <a class=\"navbar-item\" [routerLink]=\"['/about-us']\" routerLinkActive=\"router-link-active\" >\n                  About Us\n                  </a>\n                  <a class=\"navbar-item\" [routerLink]=\"['/privacy-policy']\" routerLinkActive=\"router-link-active\" >\n                  Privacy Policy\n                  </a>\n                  <hr class=\"navbar-divider\">\n                  \n              </div>\n              </div>\n            <div class=\"field is-grouped\">\n              <p class=\"control\">\n                <a (click)=\"logOut()\" class=\"bd-tw-button button\">\n                  \n                  <span>\n                    Logout\n                  </span>\n                </a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n  </nav>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar> -->\n\n<section>\n    <nav class=\"level\">\n            <div class=\"container is-vcentered has-image-\">\n                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n                    \n                    \n             </div> \n    <div class=\"container\">\n        <h1 class=\"title\">   \n       \n             Privacy Policy\n        </h1> \n\n    </div>\n   </nav> \n</section>\n\n<br>\n<section>\n    <div class=\"container\">\n      <p color-is-red>\n            Globe Connect recognizes that your privacy is very important, and we take it seriously. \n            This Privacy Policy (“Privacy Policy”) describes our policies and procedures on the collection, use, disclosure, and sharing of your personal information when you use the Globe Connect Platform. \n            This Privacy Policy applies to activities by Globe Connect, Inc. and its affiliates and subsidiaries (collectively “Globe Connect,” “we” or “us”). \n            Capitalized terms that are not defined in this Privacy Policy have the meaning given to them in our Terms of Service. \n            The Information We Collect We collect information directly from individuals, from third parties, and automatically through the Globe Connect Platform.\n            \n            \n\n      </p>  \n      <br>\n      <br>\n      <p>\n            <strong>Account and Profile Information:</strong> When you create an account and profile on the Globe Connect Platform, we collect your name, contact information (including your telephone number), demographic information, and other information you provide, such as topics that you know about or find interesting.\n            Your name, photo, and any other information that you choose to add to your public-facing profile will be available for viewing by the public and other users of the Globe Connect Platform. Once you create a profile, others will be able to see in your profile certain information about your activity on the GlobeConnect Platform, such as the questions and answers you post,\n            topics of interest to you, the information you list as credentials, and your edits to your content.\n            For more information about your choices for publicly displayed information,\n            see the section below about Your Choices.\n      </p>\n      \n      <br>\n      <br>\n        \n                <strong>How We Use Your Information</strong> We do not sell your personal information – such as your name and contact information – to third parties to use for their own marketing purposes. \n                GlobeConnect uses the information we collect for the following purposes:\n                \n                    <ul>\n                    <li>Provide our Services. To provide you the services we offer on the Globe Connect Platform and make the Globe Connect\n                        Platform available to the public, communicate with you about your use of the GlobeConnect Platform, \n                        respond to your inquiries, provide troubleshooting, and for other customer service purposes. </li>  \n                    <li>Prevent Misuse. Where we believe necessary to investigate, prevent or take action regarding illegal activities, \n                        suspected fraud, situations involving potential threats to the safety of any person or violations of our Terms of Service \n                        or this Privacy Policy</li>   \n                    </ul> \n\n                \n        \n\n\n    </div> \n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar> -->\n\n<!--Modal open-->\n<div id=\"mod\" class=\"modal hidden\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-content\">\n        \n            \n            <app-add-profile-pic></app-add-profile-pic>\n            \n        \n      \n    </div>\n    <button (click)=\"removeModal()\" class=\"modal-close is-large\" aria-label=\"close\"></button>\n</div>\n<!--Modal close-->\n\n<br>\n<div class=\"columns\">\n    <div class=\"column is-half is-offset-3\">\n        <!--USER DETAILS-->\n        <section class=\"hero is-dark\">\n            <div class=\"hero-body\">\n                \n                    <nav class=\"level\">\n                        <a (click)='toggleModal()'>\n                            <div class=\"container is-vcentered has-image-\">\n                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n                                    <figure class=\"image is-128x128 \">\n                                            \n                                            <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{user.profilePic}}\">\n                                    </figure>\n                                    \n                            </div>\n                        </a> \n                        \n                        <div class=\"container has-text-left column is-6 is-offset-3\"> \n                        \n                                <h1 class=\"title has-text-left\">\n                                        {{user.name}} \n                                </h1><br>\n                                <h2 class=\"subtitle has-text-left\">\n                                        {{user.bio}}\n                                </h2>\n                            \n                        </div> \n                        <!-- <div class=\"container has-text-justified\"> \n                            \n                                <div class=\"tags are-medium has-addons\">\n                                        <span class=\"tag\">Followers</span>\n                                        <span class=\"tag is-primary\">4k people</span>\n                                </div>\n                                                \n                        </div> -->\n\n\n                    </nav>\n                \n            </div> \n        </section>\n        <hr>\n    </div>\n</div>\n<div class=\"columns\">\n\n    <!-- <div (click)=\"toggleBurger()\" class=\"navbar-burger burger\" id=\"burger\" data-target=\"sidePanel\">\n          \n        <span></span>\n        <span></span>\n        <span></span>\n      \n    </div> -->\n\n    <!--SIDE PANEL-->\n    <div id=\"sidePanel\" class=\"column is-1\"></div>\n    <div class=\"column is-2 is-left\">\n        <aside class=\"menu\">\n            <p class=\"menu-label\">\n              Activity\n            </p>\n            <ul class=\"menu-list\">\n              <li><a>Posts: {{user.posts.length}}</a></li>\n              <li><a>Comments: {{user.comments.length}}</a></li>\n            </ul>\n            <p class=\"menu-label\">\n              Interests\n            </p>\n            <ul *ngFor=\"let f of user.forums\" class=\"menu-list\">\n                <li><a>{{f.name}}</a></li>\n                \n            </ul>\n            <p class=\"menu-label\">\n              -------------------------\n            </p>\n            \n            <ul class=\"menu-list\">\n              <li><a>Account Settings</a></li>\n              <li><a>About Us</a></li>\n              <li><a>Privacy Policy</a></li>\n            </ul>\n          </aside>\n    </div>\n\n\n    <div class=\"column is-half\">\n        <!--USER POSTS-->\n        <section>\n            <div *ngFor=\"let p of user.posts;let i = index\">\n                <br><br>\n                <a routerLink=\"/d/{{p._id}}\" >\n                    <div class=\"box\">\n                        <div class=\"media-content\">\n                            \n                                <div class=\"content\">\n                                    <div class=\"columns\">\n                                        <div class=\"column is-2\">\n                                            <figure class=\"media-left\">\n                                                <p class=\"image is-32x32\">\n                                                    <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{user.profilePic}}\">\n                                                </p>\n                                            </figure>\n                                        </div>\n                                        \n                                            \n                                        <div class=\"column is-6\"><strong>{{user.username}}</strong></div> <div class=\"column is-12\"><small>{{p.creation_date | date:'short'}}</small></div>\n                                        <br>\n                                    </div>\n                                    <div>\n                                        <p class=\"title\">{{p.title}}</p>\n                                    </div>\n                                    <div class=\"column is-11\"><p>{{p.content}}\n                                    </p></div>\n                                </div>\n                                <nav class=\"level is-mobile\">\n                                    <div class=\"level-left\">\n            \n                                        <a class=\"level-item\">\n                                        <span class=\"icon is-small\"><i></i></span>\n                                        </a>\n                                        <a class=\"level-item\">\n                                            <span class=\"icon is-small\"><i class=\"fas fa-comment\"></i> </span>\n                                        </a>\n                                    </div>\n                                </nav>\n                        </div> \n                    </div>\n                </a>\n            </div>\n        </section>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- <div class=\"container\">\n    \n<form (ngSubmit)=\"register()\" role=\"form\">\n    <legend>Form title</legend>\n\n    <div class=\"form-group\">\n        <label for=\"\">Name</label>\n        <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Input field\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"\">username</label>\n        <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Input field\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"\">Email</label>\n        <input [(ngModel)]=\"email\" name=\"email\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Input field\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"\">Password</label>\n        <input [(ngModel)]=\"password\" name=\"password\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Input field\">\n    </div>\n\n    \n\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n\n</div> -->\n\n<section class=\"hero is-dark is-bold is-fullheight\">\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <div class=\"columns is-centered\">\n          <div class=\"column is-5-tablet is-6-desktop is-6-widescreen\">\n            <form action=\"\" class=\"box\">\n              <div class=\"field\">\n                <label for=\"name\" class=\"label\">Name</label>\n                <div class=\"control has-icons-left\">\n                  <input [(ngModel)]=\"name\" name=\"name\" id=\"name\" type=\"name\" placeholder=\"Enter Name\" class=\"input\" required>\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-envelope\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"username\" class=\"label\">Username</label>\n                <div class=\"control has-icons-left\">\n                  <input [(ngModel)]=\"username\" id=\"username\" name=\"username\" type=\"text\" placeholder=\"*******\" class=\"input\" required>\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-lock\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"email\" class=\"label\">Email</label>\n                <div class=\"control has-icons-left\">\n                  <input [(ngModel)]=\"email\" id=\"email\" name=\"email\" type=\"email\" placeholder=\"enter email\" class=\"input\" required>\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-lock\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"bio\" class=\"label\">Bio</label>\n                <div class=\"control has-icons-left\">\n                  \n                  <textarea rows=\"1\" [(ngModel)]=\"bio\" id=\"bio\" name=\"bio\" type=\"bio\" class=\"textarea\" placeholder=\"enter bio\"></textarea>\n                  <!-- <span class=\"icon is-small is-left\">\n                    <i class=\"fa \"></i>\n                  </span> -->\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"pwd\" class=\"label\">Password</label>\n                <div class=\"control has-icons-left\">\n                  <input [(ngModel)]=\"password\" id=\"pwd\" name=\"password\" type=\"password\" placeholder=\"*******\" class=\"input\" required>\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-lock\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <button (click)=\"register()\" class=\"button is-dark\">\n                  Sign Up\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar> -->\n\n<div class=\"columns\">\n    <div class=\"column is-6 is-offset-3\">\n        <div *ngIf=\"searchResult.length != 0; else NoResult\">\n            <div *ngFor=\"let p of searchResult;let i = index\">\n                <br><br>\n                <div style=\"border-style: outset;\">\n                    <div class=\"box\">\n                        <div class=\"media-content\">\n                        <a style=\"color: black;\" routerLink=\"/d/{{p._id}}\" >\n                                <div class=\"content\">\n                                    <div class=\"columns\">\n                                        <div class=\"column is-2\">\n                                            <figure class=\"media-left\">\n                                                <p class=\"image is-32x32\">\n                                                    <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{p.user.profilePic}}\">\n                                                </p>\n                                            </figure>\n                                        </div>\n                                        \n                                            \n                                        <div class=\"column is-6\"><strong>{{p.user.username}}</strong></div> <div class=\"column is-12\"><small>{{p.creation_date | date:'short'}}</small></div>\n                                        <br>\n                                    </div>\n                                    <div>\n                                        <p class=\"title\">{{p.title}}</p>\n                                    </div>\n                                    <div class=\"column is-11\"><p>{{p.content}}\n                                    </p></div>\n                                </div>\n                        </a>\n                                    <hr>\n                                <div class=\"columns\">\n                                    \n                                    <nav class=\"level is-mobile\">\n                                        <div class=\"level-left\">\n                                            <div class=\"column is-2\">\n                                                \n                                                <button (click)=\"incLikes(i)\" class=\"button\">\n                                                <span class=\"icon is-medium\"><i class=\"fas fa-arrow-up\" ></i></span>\n                                                </button>  \n                                            </div>\n                                            <div class=\"column is-6 is-offset-2\">\n                                            <p> {{p.likes}} Upvotes </p>\n                                            </div>\n                                            <div class=\"column is-2 is-offset-2\">\n                                                <button class=\"button\">\n                                                    <span class=\"icon is-small\"><i class=\"fas fa-comment\"></i> </span>\n                                                </button>\n                                            </div>\n                                            <!-- <div *ngIf=\"isAdmin()\" class=\"column is-2 is-offset-8\">\n                                                <button (click)=\"deletePost(i)\" class=\"delete\"></button>\n                                            </div> -->\n                                        </div>\n                                    </nav>\n                                    \n                                </div>\n                            \n                        </div> \n                    </div>\n                </div>\n            </div>\n        </div>\n        <ng-template #NoResult>\n            <section class=\"section\">\n                <div class=\"container\">\n                    <div class=\"media center\">\n                        <div class=\"media-content\">\n                            <div class=\"content\">\n                                <h3 class=\"title\"> No Results Found</h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </ng-template>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hero is-success is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        This feature will be added in next update\n      </h1>\n      <h2 class=\"subtitle\">\n        \n      </h2>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-post/show-post.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-post/show-post.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\n    \n    <div class=\"panel panel-default\" *ngFor=\"let p of post;let i = index\">\n        \n            <div class=\"panel-heading\" style=\"height: 50px;\">\n                <div class=\"col-md-1\">Profile_pic</div>\n                <div class=\"col-md-9\"> {{p.user.name}} </div>\n                <div class=\"col-md-2\">{{p.creation_date}}</div>\n            </div>\n        <div class=\"panel-body\">{{p.content}}</div>\n        <div class=\"panel-footer\">\n        <a class=\"btn btn-large btn-block btn-default\" (click)=\"incLikes(i)\" role=\"button\">LIKE</a>\n         {{p.likes}}</div>\n         \n         <div *ngFor=\"let c of post[i].comments\">\n         <textarea disabled name=\"\" id=\"input\" class=\"form-control\" rows=\"3\" required=\"required\">{{c.content}}</textarea>\n         {{c.user}}\n        </div>\n        \n    </div>\n\n</div> -->\n\n<!--POST BOX-->\n<div *ngIf=\"isLoggedIn()\" class=\"container\">\n              \n    <article class=\"media\">\n        \n        <div class=\"media-content\">\n            \n            <div class=\"field\">\n                \n                <div id=\"forum\" class=\"select\">\n                    <select style=\"color: black;\" [(ngModel)]=\"forum\" name=\"forum\">\n                        <option selected disabled>Select Forum</option>\n                        <option *ngFor=\"let f of user.forums; let fi = index\">\n                            {{f.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"field\">\n                <p class=\"control\">\n                    <textarea [(ngModel)]=\"title\" id=\"title\" name=\"title\" class=\"textarea title\" rows=\"1\" placeholder=\"Title\" required></textarea>\n                </p>\n            </div>\n            <div class=\"field\">\n                <p class=\"control\">\n                <textarea [(ngModel)]=\"post\" name=\"post\" class=\"textarea\" placeholder=\"Start A Discussion\" required></textarea>\n                </p>\n            </div>\n            <nav class=\"level\">\n            <div class=\"level-left\">\n                <div class=\"level-item\">\n                <a (click)=\"addPost()\" class=\"button is-info\">Submit</a>\n                </div>\n            </div>\n            </nav>\n        </div>\n    </article>\n    \n</div>\n<br>\n<br>\n\n\n\n<!--FEED-->\n\n        \n            <div *ngFor=\"let p of posts;let i = index\">\n                <br><br>\n                <div style=\"border-style: outset;\" class=\"has-background-white\">\n                    <article class=\"media notification is-info\">\n                        <figure class=\"media-left\">\n                            <p class=\"image is-32x32\">\n                                <img class=\"is-rounded\" src=\"http://13.126.22.154:9669/{{p.user.profilePic}}\">\n                            </p>\n                        </figure>\n                        <div class=\"media-content\">\n                            \n                            <div class=\"content\">\n                                <p>\n                                    <strong>{{p.user.username}}</strong>\n                                      <br>      \n                                    <small>{{p.creation_date | date:'short'}}</small>      \n                                </p>     \n                                       \n                            </div>            \n                           \n                        </div>\n                        <div *ngIf=\"isAdmin()\" class=\"media-right\">\n                            \n                                <button (click)=\"deletePost(i)\" class=\"delete\"></button>\n                            \n                        </div> \n                        \n                    </article>\n                    <div class=\"section\" style=\"padding-top: 0; padding-bottom: 20px;\">\n                        \n                            <h3 class=\"title is-size-5\">{{p.title}}</h3>\n\n                            <h4 class=\"subtitle is-size-7\">{{p.content}}</h4>\n                        \n                    </div>\n                    \n                    \n\n                    <div class=\"columns\">\n                        \n                        <nav class=\"level is-mobile\">\n                            <div class=\"level-left\">\n                                <div class=\"column is-2\">\n                                    \n                                    <button (click)=\"incLikes(i)\" class=\"button\">\n                                    <span class=\"icon is-medium\"><i class=\"fas fa-arrow-up\" ></i></span>\n                                    </button>  \n                                </div>\n                                <div class=\"column is-6 is-offset-2\">\n                                <p> {{p.likes}} Upvotes </p>\n                                </div>\n                                <div class=\"column is-2 is-offset-2\">\n                                    <button routerLink=\"/d/{{p._id}}\" class=\"button\">\n                                        <span class=\"icon is-small\"><i class=\"fas fa-comment\"></i> </span>\n                                    </button>\n                                </div>\n                                \n                            </div>\n                        </nav>\n                        \n                    </div>\n                </div>\n            </div>\n        \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-table/user-table.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-table/user-table.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar>\n\n<section>\n    <nav class=\"level\">\n            <div class=\"container\">\n                <div class=\"column is-4\">\n\n                </div>\n            </div>   \n            <div class=\"container\">\n                <h1 class=\"title is-italic\">   \n                        LIST OF ALL CUSTOMERS\n                </h1>     \n            </div>\n        </nav>\n</section>\n&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;\n<section>\n   <nav class=\"level\">\n        <div class=\"container\">\n                <div class=\"column is-4\">\n\n                </div>\n        </div>  \n   <div class=\"container\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th><abbr title=\"Id\">ID</abbr></th> \n                    <th><abbr title=\"Name\">NAME</abbr></th> \n                    <th><abbr title=\"Email\">EMAIL</abbr></th>\n                    <th><abbr title=\"Name\">USERNAME</abbr></th>\n                    <th><abbr title=\" Block User\">BLOCK USER</abbr></th> \n                    <th><abbr title=\" Delete User\">DELETE USER</abbr></th> \n                </tr>   \n            </thead>   \n                                \n            <tbody>\n                <tr *ngFor=\"let i of userList; let i=index\">\n                    <th>{{i+1}}</th>\n                    <th>{{i.name}}</th>\n                    <th>{{i.email}}</th>\n                    <th>{{i.username}}</th>\n                    <th><a (click)=\"blockUser(i)\" id=\"block_{{i}}\" class=\"button is-medium is-link is-rounded is-focused\">BLOCK</a></th>\n                    <th><a (click)=\"deleteUser(i)\" id=\"delete_{{i}}\" class=\"button is-medium is-danger is-rounded is-focused\">DELETE</a></th>\n                </tr>\n            </tbody>  \n        </table>\n   </div>\n</nav>\n</section> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/add-forum/add-forum.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-forum/add-forum.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1mb3J1bS9hZGQtZm9ydW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/add-forum/add-forum.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-forum/add-forum.component.ts ***!
  \**************************************************/
/*! exports provided: AddForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForumComponent", function() { return AddForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddForumComponent = class AddForumComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-forum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-forum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-forum/add-forum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-forum.component.css */ "./src/app/add-forum/add-forum.component.css")).default]
    })
], AddForumComponent);



/***/ }),

/***/ "./src/app/add-profile-pic/add-profile-pic.component.css":
/*!***************************************************************!*\
  !*** ./src/app/add-profile-pic/add-profile-pic.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9maWxlLXBpYy9hZGQtcHJvZmlsZS1waWMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/add-profile-pic/add-profile-pic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-profile-pic/add-profile-pic.component.ts ***!
  \**************************************************************/
/*! exports provided: AddProfilePicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfilePicComponent", function() { return AddProfilePicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddProfilePicComponent = class AddProfilePicComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    onSelectThumbnail(event) {
        this.profilepic = event.target.files[0];
        // console.log('filename' + this.filename)
        // const reader = new FileReader();
        // reader.onload = () => {
        //   console.log('reader result'+reader.result)
        //   this.imageUrl = reader.result;
    }
    // reader.readAsDataURL(this.filename);
    onAdd() {
        let result = this.service.addProfilePic(this.profilepic); //, this.mname,this.no
        result.subscribe(response => {
            // console.log("aaaaaaaaaaaaa"+response);
            // const body  = response.json();
            // if (body['status'] == 'success') {
            //   this.filename = undefined;
            //   this.imageUrl = undefined;
            // } else {
            //   alert()
            //   alert(body['error']);
            // }
        }, error => {
            alert(error);
        });
    }
};
AddProfilePicComponent.ctorParameters = () => [
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddProfilePicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-profile-pic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-profile-pic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-profile-pic/add-profile-pic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-profile-pic.component.css */ "./src/app/add-profile-pic/add-profile-pic.component.css")).default]
    })
], AddProfilePicComponent);



/***/ }),

/***/ "./src/app/admin.service.ts":
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.url = "http://13.126.22.154:9669/admin";
        this.urlP = "http://13.126.22.154:9669/content";
    }
    allUsers() {
        return this.http.get(this.url);
    }
    isAdmin() {
        let decodedJwt = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(localStorage.getItem('auth-token'));
        return decodedJwt.isAdmin;
    }
    blockUsers(i) {
        return this.http.get(this.url + `/${i}`);
    }
    deleteUser(i) {
        return this.http.delete(this.url + `/${i}`);
    }
    deletePost(i) {
        return this.http.delete(this.urlP + `/${i}`);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdminComponent = class AdminComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.service.allUsers().subscribe(res => {
            this.allUsers = res;
        }, error => {
            console.log(error);
        });
    }
    blockUser(i) {
        this.service.blockUsers(this.allUsers[i]._id).subscribe(res => {
            console.log(res);
            // var blockBtn = document.getElementById("block-btn");
            // blockBtn.value = "Blocked"
        }, error => {
            console.log(error);
        });
        this.router.navigate(['/admin']);
    }
    deleteUser(i) {
        console.log('to delete: ' + this.allUsers[i]._id);
        this.service.deleteUser(this.allUsers[i]._id).subscribe(res => {
            console.log(res);
        }, error => {
            console.log(error);
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _interest_interest_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interest/interest.component */ "./src/app/interest/interest.component.ts");
/* harmony import */ var _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discussion/discussion.component */ "./src/app/discussion/discussion.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-table/user-table.component */ "./src/app/user-table/user-table.component.ts");

















const routes = [
    //{path: '', component: LoginComponent, pathMatch: "full"},
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'sign-up', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"] },
    { path: 'forum/:id', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_4__["ForumComponent"] },
    { path: 'interests', component: _interest_interest_component__WEBPACK_IMPORTED_MODULE_11__["InterestComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'd/:id', component: _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_12__["DiscussionComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'privacy-policy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] },
    { path: 'admin-all-u', component: _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_16__["UserTableComponent"] },
    { path: 'search-result', component: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_1__["SearchResultComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum.service */ "./src/app/forum.service.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _interest_interest_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interest/interest.component */ "./src/app/interest/interest.component.ts");
/* harmony import */ var _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./discussion/discussion.component */ "./src/app/discussion/discussion.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./registration.service */ "./src/app/registration.service.ts");
/* harmony import */ var _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./show-post/show-post.component */ "./src/app/show-post/show-post.component.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _add_profile_pic_add_profile_pic_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./add-profile-pic/add-profile-pic.component */ "./src/app/add-profile-pic/add-profile-pic.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-table/user-table.component */ "./src/app/user-table/user-table.component.ts");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./delete-user/delete-user.component */ "./src/app/delete-user/delete-user.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
/* harmony import */ var _add_forum_add_forum_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./add-forum/add-forum.component */ "./src/app/add-forum/add-forum.component.ts");


































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
            _forum_forum_component__WEBPACK_IMPORTED_MODULE_15__["ForumComponent"],
            _interest_interest_component__WEBPACK_IMPORTED_MODULE_16__["InterestComponent"],
            _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_17__["DiscussionComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_21__["RegistrationComponent"],
            _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_23__["ShowPostComponent"],
            _default_default_component__WEBPACK_IMPORTED_MODULE_26__["DefaultComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_27__["NavBarComponent"],
            _add_profile_pic_add_profile_pic_component__WEBPACK_IMPORTED_MODULE_28__["AddProfilePicComponent"],
            _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_29__["PrivacyComponent"],
            _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_30__["UserTableComponent"],
            _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_31__["DeleteUserComponent"],
            _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_32__["SearchResultComponent"],
            _add_forum_add_forum_component__WEBPACK_IMPORTED_MODULE_33__["AddForumComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [
            _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"],
            _registration_service__WEBPACK_IMPORTED_MODULE_22__["RegistrationService"],
            _post_service__WEBPACK_IMPORTED_MODULE_24__["PostService"],
            _forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    canActivate() {
        if (this.service.isLoggedIn())
            return true;
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/default/default.component.css":
/*!***********************************************!*\
  !*** ./src/app/default/default.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/default/default.component.ts":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultComponent = class DefaultComponent {
    constructor() { }
    ngOnInit() {
    }
};
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default.component.css */ "./src/app/default/default.component.css")).default]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/delete-user/delete-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS11c2VyL2RlbGV0ZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/delete-user/delete-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeleteUserComponent = class DeleteUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeleteUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-user/delete-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-user.component.css */ "./src/app/delete-user/delete-user.component.css")).default]
    })
], DeleteUserComponent);



/***/ }),

/***/ "./src/app/discussion/discussion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/discussion/discussion.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title{\n    font-weight: bold;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/discussion/discussion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/discussion/discussion.component.ts ***!
  \****************************************************/
/*! exports provided: DiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionComponent", function() { return DiscussionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");






let DiscussionComponent = class DiscussionComponent {
    constructor(service, loginService, route, router) {
        this.service = service;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.route.paramMap.subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let postId = result.get('id');
            yield this.service.getSinglePost(postId).subscribe(res => {
                const body = JSON.stringify(res);
                this.thread = JSON.parse(body);
                //console.log(this.thread)
            }, err => {
                console.log(err);
            });
        }));
    }
    ngOnInit() {
    }
    postComment() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.service.addComment(this.thread.post._id, this.comment).subscribe(res => {
                //console.log('postId: ' + this.thread.post._id + 'comment: '+ this.comment)
                //console.log(res)
                this.thread.comment.push(res);
            }, error => {
                console.log(error.message);
            });
            this.comment = '';
            //this.router.navigate([`/d/${this.thread.post._id}`])
        });
    }
    incLikes(i) {
        this.service.incrLikes(this.thread.post._id).subscribe(res => {
            //console.log(res)
            const response = res;
            this.thread.post.likes = response.likes;
        });
    }
    isLoggedIn() {
        return this.loginService.isLoggedIn();
    }
};
DiscussionComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
DiscussionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-discussion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discussion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discussion/discussion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discussion.component.css */ "./src/app/discussion/discussion.component.css")).default]
    })
], DiscussionComponent);



/***/ }),

/***/ "./src/app/forum.service.ts":
/*!**********************************!*\
  !*** ./src/app/forum.service.ts ***!
  \**********************************/
/*! exports provided: ForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumService", function() { return ForumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ForumService = class ForumService {
    constructor(http) {
        this.http = http;
        this.url = "http://13.126.22.154:9669";
    }
    getAllForums() {
        return this.http.get(this.url + '/forum');
    }
    followForum(forumId) {
        const body = {
            forum: forumId,
            user: localStorage.getItem('user-id')
        };
        return this.http.put(this.url + '/user/follow-forum', body);
    }
    getSingleForum(id) {
        return this.http.get(this.url + `/forum/${id}`);
    }
};
ForumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ForumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ForumService);



/***/ }),

/***/ "./src/app/forum/forum.component.css":
/*!*******************************************!*\
  !*** ./src/app/forum/forum.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/* Tooltip container */\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\n}\n/* Tooltip text */\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n \n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n@media screen and (max-width: 600px) {\n  #desktop {\n    visibility: hidden\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwrQkFBK0IsRUFBRSw4Q0FBOEM7QUFDakY7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7O0VBRWxCLG9EQUFvRDtFQUNwRCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFRvb2x0aXAgY29udGFpbmVyICovXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrOyAvKiBJZiB5b3Ugd2FudCBkb3RzIHVuZGVyIHRoZSBob3ZlcmFibGUgdGV4dCAqL1xufVxuXG4vKiBUb29sdGlwIHRleHQgKi9cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiBcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAtIHNlZSBleGFtcGxlcyBiZWxvdyEgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBTaG93IHRoZSB0b29sdGlwIHRleHQgd2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgdG9vbHRpcCBjb250YWluZXIgKi9cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNkZXNrdG9wIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../forum.service */ "./src/app/forum.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForumComponent = class ForumComponent {
    constructor(service, route, router, postService) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.route.paramMap.subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let forumId = result.get('id');
            yield this.service.getSingleForum(forumId).subscribe(res => {
                const body = JSON.stringify(res);
                this.pageBody = JSON.parse(body);
                console.log(this.pageBody);
            }, err => {
                console.log(err);
            });
        }));
    }
    ngOnInit() {
    }
    incLikes(i) {
        this.postService.incrLikes(this.pageBody.forumPosts[i]._id).subscribe(res => {
            //console.log(res)
            const response = res;
            this.pageBody.forumPosts[i].likes = response.likes;
        });
    }
};
ForumComponent.ctorParameters = () => [
    { type: _forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }
];
ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum.component.css */ "./src/app/forum/forum.component.css")).default]
    })
], ForumComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title{\n    font-weight: bold;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");





let HomeComponent = class HomeComponent {
    constructor(service, router, postService) {
        this.service = service;
        this.router = router;
        this.postService = postService;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/interest/interest.component.css":
/*!*************************************************!*\
  !*** ./src/app/interest/interest.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVyZXN0L2ludGVyZXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/interest/interest.component.ts":
/*!************************************************!*\
  !*** ./src/app/interest/interest.component.ts ***!
  \************************************************/
/*! exports provided: InterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestComponent", function() { return InterestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../forum.service */ "./src/app/forum.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let InterestComponent = class InterestComponent {
    constructor(service) {
        this.service = service;
        this.loadForumCards();
    }
    ngOnInit() {
    }
    followForum(i) {
        this.service.followForum(this.forums[i]._id).subscribe(res => {
            const body = res;
            console.log(body);
        });
    }
    loadForumCards() {
        this.service.getAllForums().subscribe(res => {
            const body = JSON.stringify(res);
            this.forums = JSON.parse(body);
            console.log(this.forums);
        });
    }
};
InterestComponent.ctorParameters = () => [
    { type: _forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"] }
];
InterestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-interest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./interest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/interest/interest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./interest.component.css */ "./src/app/interest/interest.component.css")).default]
    })
], InterestComponent);



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = 'http://13.126.22.154:9669/auth';
        this.urlU = 'http://13.126.22.154:9669/user';
    }
    validateLogin(email, password) {
        const user = {
            email: email,
            password: password
        };
        return this.http.post(this.url, user);
    }
    isLoggedIn() {
        return !!localStorage.getItem('auth-token');
    }
    getUser() {
        return this.http.get(this.urlU + `/${localStorage.getItem('user-id')}`);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(service, router, adminService) {
        this.service = service;
        this.router = router;
        this.adminService = adminService;
    }
    validateUser() {
        this.service.validateLogin(this.email, this.password).subscribe(response => {
            const body = response;
            //console.log(body.authtoken)
            localStorage.setItem('auth-token', body.authtoken);
            var decodedJwt = jwt_decode__WEBPACK_IMPORTED_MODULE_5__(localStorage.getItem('auth-token'));
            //console.log(decodedJwt)
            localStorage.setItem('user-id', decodedJwt._id);
            if (this.adminService.isAdmin()) {
                this.router.navigate(['/admin']);
            }
            else
                this.router.navigate(['/']);
        }, error => {
            //console.log(error);
            alert(error.error);
        });
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");





let NavBarComponent = class NavBarComponent {
    constructor(service, router, postService) {
        this.service = service;
        this.router = router;
        this.postService = postService;
        this.toggleHam = false;
    }
    ngOnInit() {
        this.isLoggedIn();
    }
    isLoggedIn() {
        return this.service.isLoggedIn();
    }
    logOut() {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-id');
        this.router.navigate(['/home']);
    }
    toggleBurger() {
        this.toggleHam = !this.toggleHam;
        if (this.toggleHam) {
            let activate1 = document.getElementById('navbarExampleTransparentExample');
            let activate2 = document.getElementById('burger');
            activate1.classList.add('is-active');
            activate2.classList.add('is-active');
        }
        else {
            let activate1 = document.getElementById('navbarExampleTransparentExample');
            let activate2 = document.getElementById('burger');
            activate1.classList.remove('is-active');
            activate2.classList.remove('is-active');
        }
    }
    contractBurger() {
        var activate1 = document.getElementById('navbarExampleTransparentExample');
        var activate2 = document.getElementById('burger');
        activate1.classList.remove('is-active');
        activate2.classList.remove('is-active');
    }
    searchPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (sessionStorage.getItem('search-result')) {
                sessionStorage.removeItem('search-result');
            }
            this.postService.search(this.searchQ).subscribe(res => {
                const body = res;
                console.log(body);
                sessionStorage.setItem('search-result', JSON.stringify(body));
                this.router.navigate(['/search-result']);
            }, error => {
                console.log(error);
            });
        });
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.url = 'http://13.126.22.154:9669/content';
    }
    showPost() {
        return this.http.get(this.url);
    }
    incrLikes(id) {
        const body = { _id: id };
        return this.http.put(this.url, body);
    }
    getSinglePost(id) {
        return this.http.get(this.url + '/d/' + id);
    }
    addPost(forum, title, post) {
        const body = {
            title: title,
            content: post,
            user: localStorage.getItem('user-id'),
            forum: forum
        };
        //console.log(body)
        return this.http.post(this.url, body);
    }
    addComment(postId, comment) {
        const body = {
            content: comment,
            user: localStorage.getItem('user-id'),
            post: postId
        };
        return this.http.post(this.url + '/comment/', body);
    }
    showUserPost() {
        return this.http.get(this.url + `/userpl/${localStorage.getItem('user-id')}`);
    }
    search(query) {
        const body = { query: query };
        return this.http.post(this.url + '/search', body);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/privacy/privacy.component.css":
/*!***********************************************!*\
  !*** ./src/app/privacy/privacy.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyComponent = class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy.component.css */ "./src/app/privacy/privacy.component.css")).default]
    })
], PrivacyComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(service) {
        this.service = service;
        this.showUsersPosts();
    }
    ngOnInit() {
    }
    showUsersPosts() {
        this.service.showUserPost().subscribe(res => {
            this.user = res;
            //console.log(this.user)
        });
    }
    toggleModal() {
        var ele = document.getElementById('mod');
        ele.classList.remove('hidden');
        ele.classList.add('is-active');
    }
    removeModal() {
        const i = true;
        if (i) {
            var ele = document.getElementById('mod');
            ele.classList.remove('is-active');
            ele.classList.add('hidden');
        }
        location.reload();
    }
    incLikes(i) {
        this.service.incrLikes(this.user.posts[i]._id).subscribe(res => {
            //console.log(res)
            const response = res;
            this.user.posts[i].likes = response.likes;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/registration.service.ts":
/*!*****************************************!*\
  !*** ./src/app/registration.service.ts ***!
  \*****************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegistrationService = class RegistrationService {
    constructor(http) {
        this.http = http;
        this.url = 'http://13.126.22.154:9669/user';
    }
    register(name, username, email, bio, password) {
        const body = {
            name: name,
            username: username,
            email: email,
            password: password,
            bio: bio
        };
        return this.http.post(this.url, body);
    }
    getUserDetails() {
        this.http.get(this.url + `/${localStorage.getItem('user-id')}`);
    }
};
RegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistrationService);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration.service */ "./src/app/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





let RegistrationComponent = class RegistrationComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.name = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.bio = '';
    }
    ngOnInit() {
    }
    register() {
        this.service.register(this.name, this.username, this.email, this.bio, this.password).subscribe(res => {
            this.body = res;
            //console.log(this.body);
            localStorage.setItem('auth-token', this.body.authtoken);
            var decodedJwt = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem('auth-token'));
            //console.log(decodedJwt)
            localStorage.setItem('user-id', decodedJwt._id);
            this.router.navigate(['/interests']);
        }, error => {
            alert(error.error);
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/search-result/search-result.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-result/search-result.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/search-result/search-result.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SearchResultComponent = class SearchResultComponent {
    constructor(service) {
        this.service = service;
        this.displaySearchResult();
    }
    ngOnInit() {
    }
    displaySearchResult() {
        this.searchResult = JSON.parse(sessionStorage.getItem('search-result'));
    }
    incLikes(i) {
        this.service.incrLikes(this.searchResult[i]._id).subscribe(res => {
            //console.log(res)
            const response = res;
            this.searchResult[i].likes = response.likes;
        });
    }
};
SearchResultComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }
];
SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result.component.css */ "./src/app/search-result/search-result.component.css")).default]
    })
], SearchResultComponent);



/***/ }),

/***/ "./src/app/settings.service.ts":
/*!*************************************!*\
  !*** ./src/app/settings.service.ts ***!
  \*************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SettingsService = class SettingsService {
    constructor(http) {
        this.http = http;
        this.url = 'http://13.126.22.154:9669/user';
    }
    addProfilePic(profilepic) {
        const formData = new FormData();
        console.log('id: ' + localStorage.getItem('user-id') + ' profilepic: ' + profilepic);
        formData.append(`id`, localStorage.getItem('user-id'));
        formData.append('profilepic', profilepic);
        //console.log(formData.get('profilepic'))
        return this.http.post(this.url + '/pp', formData);
    }
};
SettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/show-post/show-post.component.css":
/*!***************************************************!*\
  !*** ./src/app/show-post/show-post.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title{\n    font-weight: bold;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1wb3N0L3Nob3ctcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaG93LXBvc3Qvc2hvdy1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/show-post/show-post.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-post/show-post.component.ts ***!
  \**************************************************/
/*! exports provided: ShowPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPostComponent", function() { return ShowPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ShowPostComponent = class ShowPostComponent {
    constructor(service, postService, router, admin) {
        this.service = service;
        this.postService = postService;
        this.router = router;
        this.admin = admin;
        this.loadPosts();
        this.getUser();
    }
    ngOnInit() {
    }
    loadPosts() {
        this.postService.showPost().subscribe(res => {
            const body = JSON.stringify(res);
            this.posts = JSON.parse(body);
            //console.log(this.posts)
        });
    }
    incLikes(i) {
        this.postService.incrLikes(this.posts[i]._id).subscribe(res => {
            //console.log(res)
            const response = res;
            this.posts[i].likes = response.likes;
        });
    }
    isLoggedIn() {
        return this.service.isLoggedIn();
    }
    addPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.postService.addPost(this.forum, this.title, this.post).subscribe(res => {
                // const body = res as any
                // console.log(body);
                this.posts.unshift(res);
                //console.log(res)
            });
            this.post = "";
            this.title = "";
            //this.router.navigate(['/home']);
        });
    }
    // toDiscussion(i:any)
    // {
    //   this.service.getSinglePost(i).subscribe(
    //     res => {
    //       console.log(res)
    //       this.service.discussionBody = res as any;
    //     })
    //   this.router.navigate(['/d'])
    // }
    isAdmin() {
        if (this.isLoggedIn())
            return this.admin.isAdmin();
        else
            return false;
    }
    deletePost(i) {
        //console.log('to delete: '+ this.posts[i]._id)
        this.admin.deletePost(this.posts[i]._id).subscribe(res => {
            //console.log(res)
        }, error => {
            console.log(error);
        });
    }
    getUser() {
        this.service.getUser().subscribe(res => {
            this.user = res;
            //console.log(this.user) 
        });
    }
    selectForum(forum) {
        let forumId = this.user.forums[this.user.forums.indexOf(forum)]._id;
        //console.log(this.forum)
    }
};
ShowPostComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }
];
ShowPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-show-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-post/show-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-post.component.css */ "./src/app/show-post/show-post.component.css")).default]
    })
], ShowPostComponent);



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(service) {
        this.service = service;
    }
    intercept(req, next) {
        let tokenreq = req.clone({
            setHeaders: {
                Authorization: `${localStorage.getItem('auth-token')}`
            }
        });
        //console.log(tokenreq)
        return next.handle(tokenreq);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/user-table/user-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-table/user-table.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItdGFibGUvdXNlci10YWJsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-table/user-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-table/user-table.component.ts ***!
  \****************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let UserTableComponent = class UserTableComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    loadUsers() {
        this.service.allUsers().subscribe(res => {
            this.userList = res;
            console.log(this.userList);
        });
    }
};
UserTableComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }
];
UserTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-table/user-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-table.component.css */ "./src/app/user-table/user-table.component.css")).default]
    })
], UserTableComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/siddhesh/SUNBEAM/project/GlobeConnect_v1.1/front-end/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map