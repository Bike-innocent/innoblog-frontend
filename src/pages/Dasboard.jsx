
// import React from "react";
// import { Editor } from "@tinymce/tinymce-react";

// function Dashboard() {
//   const handleEditorChange = (content) => {
//     console.log("Content was updated:", content);
//   };

//   return (
//     <Editor
//       initialValue="<p>This is the initial content of the editor</p>"
//  apiKey='umd1w4jjnwidj0f2hnqciepoog33gbugqf64ebnc3jjo4yoy'

//       init={{
//                 plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate  mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
//                 toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//                 tinycomments_mode: 'embedded',
//                 tinycomments_author: 'Author name',
//                 mergetags_list: [
//                   { value: 'First.Name', title: 'First Name' },
//                   { value: 'Email', title: 'Email' },
//                 ],
//                 ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
//               }}
//       onEditorChange={handleEditorChange}
//     />
//   );
// }

// export default Dashboard;

import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function Dashboard() {
  const handleEditorChange = (content) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate  mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        // Load TinyMCE from the local directory
        script_url: '/pages/tinymce/js/tinymce/tinymce.min.js'
      }}
      onEditorChange={handleEditorChange}
    />
  );
}

export default Dashboard;
