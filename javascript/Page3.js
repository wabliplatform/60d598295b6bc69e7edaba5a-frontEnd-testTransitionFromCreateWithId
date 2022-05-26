let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {let projectId = window.location.pathname.replace('/Page3/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { 
      if(response.body.query.pImage !== undefined){
        if(document.querySelector('[annotationname = pImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pImage]').setAttribute('data-image-base64',response.body.query.pImage.data);
          let fileName = response.body.query.pImage.name;
          let file = new File([response.body.query.pImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = pImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = pImage]').src = response.body.query.pImage.data ;
        }
        document.querySelector('[annotationname = pImage]').name = response.body.query.pImage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pTitle]').textContent = response.body.query.pTitle; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pEnd]').textContent = response.body.query.pEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDescription]').textContent = response.body.query.pDescription; } catch (e) { console.log(e) };}});};