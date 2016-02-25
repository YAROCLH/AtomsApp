
/**
 * Variables Declaration
 */

/**
 * Events
 */
  
/**
 * Functions
 */
	function getRemember(){
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, createFile, fail);
		}
		function getFile(){
			 fileSystem.root.getFile("Users.json", {create: true, exclusive: false}, getURL, fail);
		}
		getURL(entry){
			var fileURL = entry.toURL();
		}
		
		//SAVE USER
		function DoSave(){
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, createFile, fail);
		}		 
		function createFile(fileSystem) {
		    fileSystem.root.getFile("Users.json", {create: true, exclusive: false}, createWriter, fail);
		}
		function createWriter(fileEntry) {
		        fileEntry.createWriter(gotFileWriter, fail);
		}
		function gotFileWriter(writer) {
		        writer.onwriteend = function(evt) {console.log("write success");}
		        writer.write(ToSave);
		}
		function fail(error) {
		        console.log(error.code);
		} 	