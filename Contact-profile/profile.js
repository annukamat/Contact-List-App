let userProfileContainer = document.getElementById("userInfoContainer");
// console.log(profileToShow[0]);

userProfileContainer.innerHTML =`<header>
                                    <a href="../index.html">
                                        <i class="fas fa-chevron-circle-left back-btn"></i>
                                    </a>
                                    <div class="info">
                                        <h1 class="name">${profileToShow[0].key}</h1>
                                        <p class="contact-rel">${profileToShow[0].relation}</p>
                                    </div>
                                </header>

                                <section class="contact-info">
                                    <div class="contact-sub-info">
                                        <i class="fas fa-phone icon-style"></i>
                                        <p class="contact-phone-no">${profileToShow[0].phone}</p>
                                    </div>

                                    <div class="contact-sub-info">
                                        <i class="fas fa-sms text icon-style"></i>
                                        <p class="contact-sms">Send Message</p>
                                    </div>

                                    <div class="contact-sub-info">
                                        <i class="fas fa-envelope icon-style"></i>
                                        <p class="contact-email">${profileToShow[0].email}</p>
                                    </div>

                                    <div class="contact-sub-info">
                                        <i id="location-icon" class="fas fa-map-marker-alt icon-style"></i>
                                        <p class="contact-address">${profileToShow[0].address}</p>
                                    </div>
                                </section>

                                <a href="http://">
                                    <section class="edit-contact">
                                        <a href="../Edit-contact/edit.html">
                                            <div class="edit-btn">
                                                <i class="fas fa-cog icon-style"></i>
                                            </div>
                                        </a>

                                </section>
                                </a>`

