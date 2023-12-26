// In a file named YoutubeDownloader.js
"use client"
import React, { useState } from "react"
import "./youtube.scss"
import Axios from "@/initializations/axios"
import { useYoutubeDownload } from "@/react-query/hooks/useModifyBooks.mutations"

const YoutubeDownloader = () => {
  const { mutate: downloadVideo, isLoading, isError, error } = useYoutubeDownload()

  const handleSubmit = (urlYt: string, title: string) => {
    downloadVideo(
      { url: urlYt, title: title },
      {
        onSuccess: (data: any) => {
          // Handle the success case
          const downloadUrl = window.URL.createObjectURL(new Blob([data]))
          const link = document.createElement("a")
          link.href = downloadUrl

          // Use the provided title for the downloaded file name
          link.setAttribute("download", `${title}.mp3`)

          document.body.appendChild(link)
          link.click()
          link.remove()
        },
        onError: (error: any) => {
          // Handle the error case
          console.error("Error while downloading video:", error)
        },
      }
    )
  }

  const [videos, setVideos] = useState<any>([])

  const fetchVideos = async (searchQuery: string) => {
    const apiKey = "AIzaSyCfg7hooU - vaSK_z5IdhK4z0dF7aIdYvLM" // Replace with your actual API key
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${searchQuery}&key=${apiKey}`
    )
    const data = await response.json()
    setVideos(data.items)
  }

  const searchAndFetch = () => {
    const queryElement = document.getElementById("youtube-query") as HTMLInputElement
    if (queryElement) {
      fetchVideos(queryElement.value)
      var element = document.getElementById("span")
      if (element) {
        element.style.display = "block"
      }
    }
  }

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Adjust for true center
            fontSize: "50px",
            textAlign: "center",
            backgroundColor: "#e3a1f0",
            padding: "10px 15px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          DOWNLOADING...
        </div>
      )}
      <div className="container-yt">
        <input
          id="youtube-query"
          type="text"
          className="inputYt"
          placeholder="Enter your YouTube search title"
        />
        <button onClick={searchAndFetch}>Search</button>

        <div className="yt-rows" style={{ maxWidth: "600px" }}>
          {videos.map((item: any) => (
            <div
              key={item.id.videoId}
              className="videoLinks"
              onClick={() =>
                handleSubmit(
                  `https://www.youtube.com/watch?v=${item.id.videoId}`,
                  `${item.snippet.title}`
                )
              }
            >
              <img
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
                style={{ width: "120px", height: "90px", marginRight: "10px" }}
              />
              <div className="container-details">
                <div>{item.snippet.title}</div>
                <div style={{ marginTop: "5px", color: "#888" }}>{item.snippet.channelTitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default YoutubeDownloader
