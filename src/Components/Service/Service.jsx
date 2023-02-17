import React from "react";
import "./Service.css";
import Fullstack from "./images/Fullstack.jpg";
import Html from "./images/Html.jpg";
import Mern from "./images/Mern.jpg";
import Python from "./images/Python.jpg";
import Mean from "./images/Mean.jpg";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Service </h3>
                <h6 className="text-center">
                  Efficient And Reliable Web Designers In Kolkatha at Write4u Assignment Solution 
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <marquee className="blink">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAACHCAMAAAA1OYJfAAABIFBMVEX///8cbJM3wtgkseZBQkHrxRgdtsLISio8PTxoaWgAZY4uMC41NjUTaZEAq+SgoKCPrsFVh6VqlK/Y2difucmIqb49vccAYIsYvdU0NTR7oLfp9vitra0AXYopKiktLi2TlJO+v76uw9Hw8PDf5+zY8fZZWllJSknV1dVozd/MzMzo6OjR6/hmwusuc5jQ7vSA1ONdXl15eXm1tbXGQRvENQB/y+5Gueiz3/TK6Pej2PLF1N655u96ye2Pj4+FhYWa3OjksqnFPBHRb1v+/PX68tfw02ny2tbMXUTpv7i8zdnW4OdTyNxJgqKu4uzYinv36ufKUDPSdWLXhnb47cXuzUv03pXdmo7257Ly24j14qLv0WDuz1J0y9QAUIIdHx1loLaDAAAQk0lEQVR4nO2d+0PayBbHUSmmvNQiBYyAiviqKGorvqpsd92Hirt799G9u7fr//9f3MwjM3NmJpMEAhaT7y+lkxDgk5NzzpwzialUosj18y/P/Q1iqR8/fH7urxBHfTv//tM3z/0l4qdv5+fnP/36w3N/jbjpP+8d7vMfvk1c/ET1G8Y+/z5x8RMVxT6fuPiJimFPXPz49Lsy8jPHnrj48ei7P169ksED7I6L//lZvtlL1p+vkP64BYOfAXbH4BN7j1S3r1x9/50wrGBvPds3fIH67vtXgv7kGxTsz/cdX57+eiXpL3dLgn1sQqFUluviv4kYu31+cdrpzTnq9T6enu2P/OWnVn+q0LmLjxL7/kWn6GiOCf2vdxFL9L/roSP91wH/zaeIsJ+fAuIi+7kLO8pfNAWCoVSD/acP0Nw/DfUx9umcFjkj34mVyf9tgE69+y+/fRgV+35Hb+eAfC9G4G+9jf1vttMPPwqO5r18iLbfZ5z3fJkT8J0YuZrbf7TQ/xGnTKmf3nNPI73/S8Z8/P2A0DH4i4h/3NcsHXilJPbZdfG/guGrTOat6dh2Jzh07Gki/m1ftW7/J4VSzT6ui/9RGLPfZszYL0JBR4oVdwBeqoUxERcvYP+SyRix2yH8C7P3TsS/7CvXrTtT/ct7H+TiGfarTMaM/Sw89LmY+XckDB5UH1V9/kCxY/9ixP5xKOoOd9/U6KXp9n9qd0nSL6ST/SWT8cE+hIOhipd7D6GrTMYHuz0sc2TuZ5P+PdOhtxk/7KNQdzTxXzQNsjN+2P2pF7k0G88n/6O+fvliN1JHoDunF2fn+47Oz1DxXWEfsyQymHyxG5DPfdQ1NuwzGICLE/gVUyc/7D0v5r0L79ywLVYREi+jkQ92fb7u38o45+8rno7ty0+vzNi1c9NiL4D9CiEhce6qjNjbuswkYAfD5u8dx/cepw5mHB0wbej3Wi4DXcrb7+B2eBQjdp17CeypmZ+Ztph6X5lxVXBU91jCNciKqizL28sVsP0N2GjCfqoYe6jSVmdKsb8pzAgqvPHYbQnsllWwL2YNh5Gwi92lfZl6secRSO12+7CtbHPdzLRhr4u4ZiqK96CKEPvbQ2FTMFM/7D9UqWa7V4B9ZyqxLwNcMzNe+0WH/UrcojSTNKG03XVgC6pWd4VjuHlQ6F/+rILQVZyuosLeh2+D1HWN0fYuYE7Jzz5Kh5iuBPKyArB7BdSosPeld8F4qmnP2TroBLxr8XiKO2XTpYABNRrsX+SAaEPqH5VPffSAPou8/AM53Cl+71QVB1oBA2oU2N+qGQowdo3B6k3dAd69OmRHw+GhOFXrlBYDBtTRsYP0xVXRaOttPfPuFdwNx9TpausBloaAOjL2K3l/JDGNUf36oTaUqgdCE9Xp6uoFDqgjYveQ6NgVc71SqVcfdJcMmnBNV9a+FDSgjgX7uehj5I066tpLBmOfqjwmeEAdC/aO4GLkiKh6mOqux2GcszfVAbVg2jd67EL2qLhmW6X+qD1ICodUNfP8mgWpmwLqOLDzgKomMQ8KdZ1XJzorTpex3wUPqOPA3vN27MosqWpYbncxZWsgBzCgLhl3jhw79zFFufyluBiDraMQ4ftZX5M2QwTUMWBnHVTVxewGS2Go5sQroXT0+vXrY7hDC41tqWNHq/jlCdrMdLN28k7+BDR+tI5evQP7qiJ77en22qLOpBwioI4BO8tjlJy7LRt713QcG7iYdw3LsrbhHms1Z6wBXei1M/ZEho7zlqh8rbElgX9C799Dr06allGNHbTXQk6zKU8PBj17dtFMKXLszNiVCaYST43HgeG01Uin0zW4R9MZSkPsaLf8NXmdVmQ1SuLOOzn2/mtL3VtUA7/htWYvi16CG9DYcUC93wAS3U7U2FkzT5meyim70bHLwtgbYGi1hn52E1jwWp6dCPyOdA6rlqfA8uAAeTSEX243clx4OC0M5JpkL7yhlgN6WiAH0wXU5TroQ68Inx01djd9VJM/2di9pkl6qdgJSIjduQCsG/JyD9lybq9UKu3sra8eNzD42oKw843FjHWnJGgB4a2JIyX8IeSKOylBkZOsDaiww5cdJ/aOl4uRPXs1XFLelB3Keo5gF/0GAtag5wHbssU2tY4QdxAetpH5r6ofhS4Z60gdxyeyoY4jrUhzJTw4QexFDxeT6oaJp6os2bK3LBV7jfva1LEl/AepmZaoNfDloH4UOkH5NXUcnVQ5rLvSBtTJYadZu+auI9nYQ96XtC0hLjWIk8nt8DHk7V1jxz4oL/oUdB7EC0aIqFDYl6yr4/hE3mi/nS6gThL7uVfjWa48PvgcSBYyQRHxMQ2SorkiLK/p65ZiyzcWtHYhogK9ayohgwi7/BPttzvQzlAnh51EVHF+ukn+kadKnhUwD6HkTaCIqFrbkOwJMnb3zKi2jNM/IZW5kb0Q1XpN78LJidxRN4AVeEiVOzI8Oewf5WLMPf3lowVUYt3ClX+ddwz7Go6lxUiIbRnki7k0xBxhRNUG1EliJ6sshAkmPaDS3fA5jiJkm8IV3kB2fgOwo9SmyWxfiagkoRRctldEfW2IqGl9RIXZI5uhTg57UcrZW/QryHlM3+c4ipANctvEtpyC1r5tpS1eoVEiKs58eEKZKnlF1GboiCqtwKtvasfHiJ0kMkL2uEhnxBJ1cxFMJ2RrHCMxfXQq2BWArJkbsxJR8Zy2sS4NCKfBFYmoJXVD3sMpeQXUCWLHpQHRx9Tpv6O6dmzf7NJH/iQnXQHImrkLkCPqHjoNedHpRBdRpYCaZbWXiWE/l5YUXdLootRjzIfRCKUp7BJ3ECPLXxCw7zSB55bmqKuImQWKxNuyF6IKH1HhCjwHYp0qqxn/l3igaLGTYrvwjej+clspbNZOjNA1ToQYWbLoeFAgFFwGiKh7RwhZHoZDY0S9VsdxRE3vrQsiG6QFAz6qjAM7TtuF9kadRtS+5NtDVgZSxNjcuZBDBhv+KseOJq3iVIbUZBGb1Zt8DlcWoEMxz1E1kyIyP6txNenFIy9pfwbsp7AKtlGn9zrJk6W++TAaocSDeol3DVoDEPw9tlG+N6n6WogOqfnmc1JuchI2oiq1djfShIEeGHs5PHZebRnU78kLuegbdo7qYG+yrNnJG4ndY3+P/QE6E2KWsZODiHKKEx8qoqatPFeDXBLSCryA2P1WZEunZUXeDtUBzbxWnX7I6PkjsUJizw13WrTOsCMP0BT2JhEVwSG2rh5v2zJE1C11HEfU/Jqga1K2WZICajDsHvNaJo8JmIc6IGvfyHrlj+Gx8/aSE9to+XXdzW6wsSsdjC0Mp6b31aaIanlFVM0cNVxAZdilgCB7GakfnvW4u9VVD0TUpUJ02Hl7ic+RcJhFjgJRBuFRyA6PpdkpkXmO6hFRdXNUeUl7QOyya3LdAtG9dC4r92Y2PTBZqrNlCxFgd9tLyMSp03Cxi41rLHGOigvzORkkjqga32OMqLo5akjqjK98kWQF7vdyuKirnwvUE297cc7oAX0pF8LCh1TUOcJV8G2L+ZMdmlRe5yXLBdkh6fdLR4tqjhoyoHLsAzkk1JmfKcunJEgBkicyi9mCF/a+z3E0ou2lvSYHirEfkdo7uP7BHBVNrhRzHyqiak5HyIDKsW8ol0m2srJxebnxRp7cOlvufNiARGZQKAzoSxl7uFUDWFukveROlZBQUukwEhvXRNCWtzTmHlFE3QwZUAUnrnlnNlupZDXnseLHpidid1y7F/bQ5Xa3vcSmSkjvCPam4i9g1ZdU2oG5l5SFCFQhIyp8IoMsiWABjbGqcDlwVPBLHzF2lj86gYFhl6mHL4WR9tIemyoh4fi3dYKMHQZByZa3FXM3RtRc8IhaNkq6qWaw6IytuOc6eObpa+wIO+teO96L+XZ5lhp23UCKOI48ctpNFtgwpO1toXFNJNdb1hVzv7GUN5E9w/dRDTIUftHWgNG44pO0pzB2drvRCjrX9LXcXBoilVkja+TEgNeiizZ445pIqvq6C8iEAa+IumCMqGH/vJcZu5rMaJU1L5TH6ghp+0C4PuQK5BAxdYFiF2paLna5PK5kh9inBO2j6iLqqncf1SAf7K0g3r3gs2IbS8SOriE3z1c62OGd+6pr7cIYxd6UAKodjDw0dxJRNUthciHnqGb5YA+UB8Hpq4c+CmVfdEz3Bh5laXv4eSq2WCmuNWS3w4ehLa9Cc8fHkpZtI5kjqn5lkkF+2FP3dR8/UwhEPXXKJ6mbyNpZMUHJIEN7mXWCHcS7hux2sHQdjBww96EiqnW9KklzfoB8sac2dWm68JaZQNRTF0WGHRcW2PxKvUUvbBMbRzVpAQvBLvtcdWUSjQwsmdkaJqKCYjvSk19m44/dmeYa8pmKX1HA1VmRrcO7RJ/JMn0lps72Ax7SFelcQCOu6YxdX29piOY+VERV5LHmmisIdifP9oisWd+aAJOAHRcdWBFHc/d10GNSlZ4cA8tBmjXcyJD3TDvDDdmW15q8IYQP9aSJqE98H6DjXF5VzTezMdzNIWpRUxEoVMy3E0PtF1kljNZ63C3qowb6wQ+L1FpbcARZoZEFxWrxjrLfJW8n8biEXq4F+wj+OYp8Q+zlIpC38W4M6kIpoZDN1pcCWzqSze+cJtjZvchyE3uYJUovWK278iBbrziqZ5fKoZgjydjZXbGaJ2uEXyzz0tXa3BzuD11z7HcYe7bsbtE80GSIZkcirXoMO+m7sGKYxssMUxBLpFWHYacNQebcdc+qGqLsnkinU4ad1pN5HqShnnCPSGd8uS/Bzjod+mc/JmE1Eu3zDjYtJ7MuliaoIiVpZASyOfYVgp13ApVeB4mrYR49kMhD/N5I9yFObH2fUv2l3PvP8kVflvhfPHF7tLwXqMkhMffZJJEcVaf8WcjsTip3wMPc0UMJEw8/ms74TQXuqkxfc0fgu4nFjyLhWVOsVci6sOpjIAXwD4+JyQ8v4e5Id0UCnzLpkxkXfPWhb7B52z68eux3u7sP5DHv7I96zD7sdvuPwiPI4yjhOfdsOSx/FKUJO0XffZQAtg8fu7uzFLHhnc7m3f5VTOGLP9sNqvzGZG1lRgOw6pgw0ayZtubNu48xjxPM3HlUNbqZqKQ+gz9eYuvNgruZ6MjHd/rLkxlWdzdlMxGT1/wJhJiILWvNsjUfnpOm0RjD5MYFH9cGFnMz/K8kBgmroXDTBPKwjXSI00w3EldnY+pqCsy9s364pp09HHGUMHpmLe3HLtrF868hvGzxZa119qCV0e3dSRP7AeZH9lXXsfpY5pP3Gu4j+XeEPATJq914LlG45NyZn7EfhgRfnQ2fGNrd8A9SeQHiy7j5Pa+p/hDcq7NhzFyQHUs/s8njKl9/2Z4NB35o5jHWgOXvAz7o+XckNczjPOkcQcuuoylkhaf2B/Q01YfYzjdH1eaBu3y+XhaGH31dTTXpPI0kZvDZA/H5KIddU2U3vvP7yNRaoeALdXhnA/kD8DpD3008egTafOOCr8j3iLQf+7ugoPXQ7SfMo5Jj8eR2kcqM9p4F226327Yd09bcOLV8UKfg/R9ikChC3ZcLFXz/ZCHE7WiJItD94oHjbQrZ+orPU98SRazWxkqhXqnUD5aHu08q0dBqXS4uFf79d7CRkJ+8Nu+WV8p3wR5rkEjR/wEW3QTB7aMQBQAAAABJRU5ErkJggg==" alt="" />
              <img src={Fullstack} className="img-thumbnail    merquueImages" alt="" />
              <img src={Html} className="img-thumbnail    merquueImages" alt="" />
              <img src={Mern} className="img-thumbnail    merquueImages" alt="" />
              <img src={Python} className="img-thumbnail    merquueImages" alt="" />
              <img src={Mean} className="img-thumbnail    merquueImages" alt="" />

              
            </marquee>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div class="card">
              <i class="fas fa-blog fa-10x  text-center"></i>

              <div class="card-body">
                <h5 class="card-title">Website Maintenance</h5>
                <p class="card-text">
                  Stay ahead with our website maintenance services. Trust our
                  experts to keep your site updated, secure and running
                  smoothly.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div class="card">
              <i class="fas fa-paint-brush fa-10x text-center"></i>

              <div class="card-body">
                <h5 class="card-title">E-Commerce Website</h5>
                <p class="card-text">
                  Unleash the power of online sales with our cutting-edge
                  e-commerce website design that is Secure, engaging and
                  user-friendly.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div class="card">
              <i class="fas fa-vr-cardboard fa-10x text-center"></i>
              <div class="card-body">
                <h5 class="card-title">WordPress Error/Problem Fix</h5>
                <p class="card-text">
                  We offer fast and effective solutions to fix any problem and
                  get your website back up and running smoothly. Contact us for
                  professional assistance.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div class="card">
              <i class="fab fa-internet-explorer fa-10x text-center"></i>

              <div class="card-body">
                <h5 class="card-title">Website Design</h5>
                <p class="card-text">
                  Elevate your online presence with a custom website design. Our
                  team of experts crafts visually appealing and user-friendly
                  sites to help you stand out and achieve your goals.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our process */}

      <div className="container">
        <div className="row">
          <div className="col-2 mt-5 ">
            <h4> Our Process</h4>
          </div>

          <div className="col-sm-10">
            <p className="lead">
              Transform your online presence with our 3-step website design
              process. Our team of web designers in Hyderabad assesses your
              needs, creates a custom design, and provides ongoing maintenance
              for a website that accurately reflects your brand and drives
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4  ">
            <div class="card text-center stepData">
              <div class="card-header rounded-pill">Step1</div>
              <div class="card-body">
                <h5 class="card-title">Assessment</h5>
                <p class="card-text">
                  Our team conducts a thorough analysis of your business needs,
                  target audience, and competitors to create a customized
                  approach to your web design project.
                </p>
                <a href="#" class="btn btn-primary">
                  Contact Us
                </a>
              </div>
              <div class="card-footer text-muted">Touch With Me</div>
            </div>
          </div>

          {/* second */}

          <div className="col-sm-4">
            <div class="card text-center stepData">
              <div class="card-header rounded-pill">Step2</div>
              <div class="card-body">
                <h5 class="card-title">Design And Development</h5>
                <p class="card-text">
                  Our designers and developers create a visually appealing and
                  functional website that aligns with your brand and accurately
                  reflects your unique vision.
                </p>
                <a href="#" class="btn btn-primary">
                  Contact Us
                </a>
              </div>
              <div class="card-footer text-muted">Touch With Me</div>
            </div>
          </div>

          {/* thrird */}

          <div className="col-sm-4">
            <div class="card text-center stepData">
              <div class="card-header rounded-pill">Step3</div>
              <div class="card-body">
                <h5 class="card-title">Launch & Maintenance</h5>
                <p class="card-text">
                  Upon completion, we launch your website and provide ongoing
                  maintenance and support to ensure that your site remains
                  up-to-date, secure....
                </p>
                <a href="#" class="btn btn-primary">
                  Contact Us
                </a>
              </div>
              <div class="card-footer text-muted">Touch With Me</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
