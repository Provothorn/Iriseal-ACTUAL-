import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { Link } from "react-router-dom";
// import { useStorageUpload } from "@thirdweb-dev/react";

const SignDocs = () => {
  const [file, setFile] = useState();
  const [docHash, setDocHash] = useState("");
  const [pubKey, setPublicKey] = useState("");
  const [fetch, setFetch] = useState(false);
  const [sign, setSign] = useState(false);
  const [hash, setHash] = useState("");

  const upload = () => {
    setDocHash("ipfs://QmTLCsfAqQGwC816HxGCgEThKATrw96g2dLYQwySwhG7t6/0");
    // setPublicKey('hyJLQs+OFHstkxW1+EFgkkoe1u5paDNJugJll/gLmpqU6jBP5sMUblugQEiqWuyn6LKvDBvEf9qVoXDwhn5cEGJLRRF9JvWlMZu+SdTkgGFtu/koz3+dg8V97TqVIGR6baunbnVfOEApmELz7NfyBK3KmPYdKexmHTU1kP0SoJqgpHA8J3mdIhBReOT/V+iSZPBIWANr18xN3vGulCOZHjsiw0bp5dn5FW8f3lPsDEJwANH7XmqtW8XqAPCnPeKD')
    setFetch(true);
  };

  const signDoc = () => {
    setHash(
      "P0SoJqgpHA8J3mdIhBReOT/V+iSZPBIWANr18xN3vGulCOZHjsiw0bp5dn5FW8f3lPsDEJwANH7XmqtW8XqAPCnPeKD"
    );
    setPublicKey(
      "hyJLQs+OFHstkxW1+EFgkkoe1u5paDNJugJll/gLmpqU6jBP5sMUblugQEiqWuyn6LKvDBvEf9qVoXDwhn5cEGJLRRF9JvWlMZu+SdTkgGFtu/koz3+dg8V97TqVIGR6baunbnVfOEApmELz7NfyBK3KmPYdKexmHTU1kP0SoJqgpHA8J3mdIhBReOT/V+iSZPBIWANr18xN3vGulCOZHjsiw0bp5dn5FW8f3lPsDEJwANH7XmqtW8XqAPCnPeKD"
    );
    setSign(true);
  };

  const uploadToIpfs = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    try {
      axios
        .post("http://localhost:8080/upload-to-ipfs", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("Success ", res);
        });
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <b>IrisSeal</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav"></div>
      </nav>

      <div class="homediv">
        <h1 class="firsth1">Sign your Documents</h1>

        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])}  className="form-control"/>
        </div>

        <button class="gen-btn" type="button" onClick={upload}>
          Upload Docs on Ipfs
        </button>

        <button class="gen-btn" type="button" onClick={signDoc}>
          Sign Docs and generate public key
        </button>

        {fetch && (
          <div>
            <a href={docHash}> Show Docs</a>
          </div>
        )}

        {sign && (
          <div>
            <div>
              <p>Public Key</p>
              <p>{pubKey}</p>
            </div>

            <div>
              <p>Document hash</p>
              <p>{hash}</p>
            </div>
          </div>
        )}
      </div>

      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse sidebar-dark bg-dark">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
        <br/>
        
        <Link to="/singDocs">
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-lock fa-fw me-3"></i><span> Sign Docs</span></a>
              <br/>
              </Link>
        
              
              <Link to="/verify">
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>Verify Docs</span>

        </a>
        </Link>
        <br/>
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-globe fa-fw me-3"></i><span>International</span></a>

<br/>
       
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
      
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
      </div>
    </div>
  </nav>
    </div>
  );
};

export default SignDocs;
