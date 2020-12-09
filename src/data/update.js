const axios = require("axios")
const { JSDOM } = require("jsdom")
const fs = require("fs")

  !(async () => {
    const dom = new JSDOM(await axios("https://unc0ver.dev").then(e => e.data)).window.document
    fs.writeFileSync("./LegacyVersions.json", JSON.stringify([...dom.querySelectorAll("#legacyReleases .releaseTableView")].map(item => ({
      name: item.querySelector(".releaseVersion").textContent.replace(/^\s|\s$/, ""),
      date: item.querySelector(".releaseDate").textContent,
      url: item.querySelector("a").getAttribute("href"),
      changelog: [...item.querySelectorAll("ul > li")].map(item => item.innerHTML)
    }))))

    fs.writeFileSync("./devicesTested.json", JSON.stringify([...dom.querySelectorAll("#testedDevicesList tr")].map(item => ({
      nameDevice: item.children[0].textContent,
      iOSVersion: item.children[1].textContent
    }))))

    fs.writeFileSync("./rebelMore.json", JSON.stringify([...dom.querySelectorAll("#rebelMore li")].map(e => e.innerHTML)))

    console.log(" Done ")

  })();