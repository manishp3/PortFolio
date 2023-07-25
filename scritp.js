// let down=document.getElementById('resume');

// down.addEventListener('click',function(){
//  let gitUrl='https://github.com/manishp3';
//  window.localStorage.href=gitUrl;
// });

const githubButton = document.getElementById('resume');

// Add a click event listener to the button
githubButton.addEventListener('click', function() {
    // Set the URL to your GitHub page
    const githubURL = '';
    // Redirect to your GitHub page
    window.location.href = githubURL;
    // window.open(githubURL, '_blank');
});