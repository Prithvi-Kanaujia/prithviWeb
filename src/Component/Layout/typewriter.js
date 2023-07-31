import TypewriterComponent from "typewriter-effect";

// new Typewriter('#typewriter', {
//   strings: ['Hello', 'World'],
//   autoStart: true,
// });


function typingAnimation(){
    return <TypewriterComponent
      options={{
        strings: ['Software Developer', 'Student', ''],
        autoStart: true,
        loop: true,
      }}
    />
}

export default typingAnimation;