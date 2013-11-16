// get the relative path  

function getfilename()
{
 	var scriptPath_1 = document.location.href;
	var scriptPath;
	
	if(scriptPath_1.indexOf("\?") != -1)
		scriptPath = scriptPath_1.substring(0, scriptPath_1.indexOf("\?"));
	else scriptPath = scriptPath_1;
	
    var scriptName = document.getElementsByTagName('script');
    scriptName = scriptName[scriptName.length - 1].getAttribute("src");
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
	return filename;
}
/*
function getRelativePath() {
    var scriptPath_1 = document.location.href;
	var scriptPath;
	
	if(scriptPath_1.indexOf("\?") != -1)
		scriptPath = scriptPath_1.substring(0, scriptPath_1.indexOf("\?"));
	else scriptPath = scriptPath_1;
	
    var scriptName = document.getElementsByTagName('script');
    scriptName = scriptName[scriptName.length - 1].getAttribute("src");
    var url = window.location.pathname;
//  var filename = url.substring(url.lastIndexOf('/') + 1);
  
//	var path = scriptPath.substring(8, scriptPath.length - filename.length);
//	path = path.substring(0, path.length - "trials/".length);
	
	var filename = url.substring(url.lastIndexOf('/'));
	var path = scriptPath.substring(8, scriptPath.length - filename.length);
	var tmp = path.substring(path.lastIndexOf('/') + 1);
	path = path.substring(0, path.length - tmp.length);
	
	path = path + "participants' data/";
    path = path.replace(/\//g, "\\\\");
    return unescape(path);
}
*/
//write the data to certain file
function wfile(data,filename)
{		
	try{
			var pm = netscape.security.PrivilegeManager;
			pm.enablePrivilege('UniversalXPConnect');  
		}catch(e) { alert("!!please type 'about:config'in your browser, and set the 'signed.applets.codebase_principal_support' attribute to 'true'"); }
		
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	
	if(file instanceof Components.interfaces.nsILocalFile)
		file.initWithPath(filename + ".txt");
	else
	{
		alert("error");
		return;
	}
	
	var outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
	
	try{
		 outputStream.init(file, 0x02 | 0x08 | 0x10, 0666, 0);        
	
	}catch(e) {alert(e);}
	
	var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
	
	try{
//		outputStream.write(data,data.length);
//		outputStream.write("\r\n",1);	
        converter.init(outputStream, "UTF-8", 0, 0);
        converter.writeString(data);
		converter.writeString("\r\n");
 //       converter.close();
		
	}catch(e) {alert(e);};
	
	converter.close(); 
}