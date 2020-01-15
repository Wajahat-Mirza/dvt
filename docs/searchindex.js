Search.setIndex({docnames:["abstract","aggregate/audio","aggregate/cut","aggregate/display","aggregate/length","aggregate/people","annotate/cielab","annotate/diff","annotate/embed","annotate/face","annotate/hofm","annotate/img","annotate/obj","annotate/opticalflow","annotate/png","cli","core","demo","dvt","index","install","pipeline/csv","pipeline/viz","tutorial/annotators","tutorial/cli","tutorial/custom","tutorial/index","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["abstract.rst","aggregate/audio.rst","aggregate/cut.rst","aggregate/display.rst","aggregate/length.rst","aggregate/people.rst","annotate/cielab.rst","annotate/diff.rst","annotate/embed.rst","annotate/face.rst","annotate/hofm.rst","annotate/img.rst","annotate/obj.rst","annotate/opticalflow.rst","annotate/png.rst","cli.rst","core.rst","demo.rst","dvt.rst","index.rst","install.rst","pipeline/csv.rst","pipeline/viz.rst","tutorial/annotators.rst","tutorial/cli.rst","tutorial/custom.rst","tutorial/index.rst","utils.rst"],objects:{"dvt.abstract":{Aggregator:[0,1,1,""],FrameAnnotator:[0,1,1,""],VisualInput:[0,1,1,""]},"dvt.abstract.Aggregator":{aggregate:[0,2,1,""],name:[0,3,1,""]},"dvt.abstract.FrameAnnotator":{annotate:[0,2,1,""],name:[0,3,1,""]},"dvt.abstract.VisualInput":{get_metadata:[0,2,1,""],next_batch:[0,2,1,""],open_input:[0,2,1,""]},"dvt.aggregate":{audio:[1,0,0,"-"],cut:[2,0,0,"-"],display:[3,0,0,"-"],length:[4,0,0,"-"],people:[5,0,0,"-"]},"dvt.aggregate.audio":{PowerToneAggregator:[1,1,1,""],SpectrogramAggregator:[1,1,1,""]},"dvt.aggregate.audio.PowerToneAggregator":{aggregate:[1,2,1,""],breaks:[1,3,1,""],name:[1,3,1,""],output_dir:[1,3,1,""]},"dvt.aggregate.audio.SpectrogramAggregator":{aggregate:[1,2,1,""],breaks:[1,3,1,""],name:[1,3,1,""],output_dir:[1,3,1,""],spectrogram:[1,3,1,""]},"dvt.aggregate.cut":{CutAggregator:[2,1,1,""]},"dvt.aggregate.cut.CutAggregator":{aggregate:[2,2,1,""],cut_vals:[2,3,1,""],ignore_vals:[2,3,1,""],min_len:[2,3,1,""],name:[2,3,1,""]},"dvt.aggregate.display":{DisplayAggregator:[3,1,1,""]},"dvt.aggregate.display.DisplayAggregator":{aggregate:[3,2,1,""],min_face_score:[3,3,1,""],min_obj_score:[3,3,1,""],name:[3,3,1,""],shot_names:[3,3,1,""],shot_sizes:[3,3,1,""],size:[3,3,1,""]},"dvt.aggregate.length":{ShotLengthAggregator:[4,1,1,""]},"dvt.aggregate.length.ShotLengthAggregator":{aggregate:[4,2,1,""],max_person_dist:[4,3,1,""],min_face_score:[4,3,1,""],min_obj_score:[4,3,1,""],name:[4,3,1,""],shot_names:[4,3,1,""],shot_sizes:[4,3,1,""]},"dvt.aggregate.people":{PeopleAggregator:[5,1,1,""],make_fprint_from_images:[5,4,1,""]},"dvt.aggregate.people.PeopleAggregator":{aggregate:[5,2,1,""],face_names:[5,3,1,""],fprint:[5,3,1,""],name:[5,3,1,""]},"dvt.annotate":{cielab:[6,0,0,"-"],diff:[7,0,0,"-"],embed:[8,0,0,"-"],face:[9,0,0,"-"],hofm:[10,0,0,"-"],img:[11,0,0,"-"],obj:[12,0,0,"-"],opticalflow:[13,0,0,"-"],png:[14,0,0,"-"]},"dvt.annotate.cielab":{CIElabAnnotator:[6,1,1,""]},"dvt.annotate.cielab.CIElabAnnotator":{annotate:[6,2,1,""],frames:[6,3,1,""],freq:[6,3,1,""],name:[6,3,1,""],num_buckets:[6,3,1,""],num_dominant:[6,3,1,""]},"dvt.annotate.diff":{DiffAnnotator:[7,1,1,""]},"dvt.annotate.diff.DiffAnnotator":{annotate:[7,2,1,""],bins:[7,3,1,""],name:[7,3,1,""],quantiles:[7,3,1,""],size:[7,3,1,""]},"dvt.annotate.embed":{EmbedAnnotator:[8,1,1,""],EmbedFrameKeras:[8,1,1,""],EmbedFrameKerasResNet50:[8,1,1,""]},"dvt.annotate.embed.EmbedAnnotator":{annotate:[8,2,1,""],embedding:[8,3,1,""],frames:[8,3,1,""],freq:[8,3,1,""],name:[8,3,1,""]},"dvt.annotate.embed.EmbedFrameKeras":{embed:[8,2,1,""],model:[8,3,1,""],outlayer:[8,3,1,""],preprocess_input:[8,3,1,""]},"dvt.annotate.embed.EmbedFrameKerasResNet50":{model:[8,3,1,""],preprocess_input:[8,3,1,""]},"dvt.annotate.face":{FaceAnnotator:[9,1,1,""],FaceDetectMtcnn:[9,1,1,""],FaceEmbedVgg2:[9,1,1,""]},"dvt.annotate.face.FaceAnnotator":{annotate:[9,2,1,""],detector:[9,3,1,""],embedding:[9,3,1,""],frames:[9,3,1,""],freq:[9,3,1,""],name:[9,3,1,""]},"dvt.annotate.face.FaceDetectMtcnn":{cutoff:[9,3,1,""],detect:[9,2,1,""]},"dvt.annotate.face.FaceEmbedVgg2":{embed:[9,2,1,""]},"dvt.annotate.hofm":{HOFMAnnotator:[10,1,1,""]},"dvt.annotate.hofm.HOFMAnnotator":{ang_buckets:[10,3,1,""],annotate:[10,2,1,""],blocks:[10,3,1,""],frames:[10,3,1,""],freq:[10,3,1,""],mag_buckets:[10,3,1,""],name:[10,3,1,""]},"dvt.annotate.img":{ImgAnnotator:[11,1,1,""]},"dvt.annotate.img.ImgAnnotator":{annotate:[11,2,1,""],frames:[11,3,1,""],freq:[11,3,1,""],name:[11,3,1,""]},"dvt.annotate.obj":{ObjectAnnotator:[12,1,1,""],ObjectDetectRetinaNet:[12,1,1,""]},"dvt.annotate.obj.ObjectAnnotator":{annotate:[12,2,1,""],detector:[12,3,1,""],frames:[12,3,1,""],freq:[12,3,1,""],name:[12,3,1,""]},"dvt.annotate.obj.ObjectDetectRetinaNet":{cutoff:[12,3,1,""],detect:[12,2,1,""]},"dvt.annotate.opticalflow":{OpticalFlowAnnotator:[13,1,1,""]},"dvt.annotate.opticalflow.OpticalFlowAnnotator":{annotate:[13,2,1,""],frames:[13,3,1,""],freq:[13,3,1,""],name:[13,3,1,""],output_dir:[13,3,1,""],raw:[13,3,1,""],size:[13,3,1,""]},"dvt.annotate.png":{PngAnnotator:[14,1,1,""]},"dvt.annotate.png.PngAnnotator":{annotate:[14,2,1,""],frames:[14,3,1,""],freq:[14,3,1,""],name:[14,3,1,""],output_dir:[14,3,1,""],size:[14,3,1,""]},"dvt.cli":{print_help:[15,4,1,""],run_cli:[15,4,1,""]},"dvt.core":{DataExtraction:[16,1,1,""],FrameBatch:[16,1,1,""]},"dvt.core.DataExtraction":{ainput:[16,3,1,""],data:[16,3,1,""],get_data:[16,2,1,""],get_json:[16,2,1,""],run_aggregator:[16,2,1,""],run_annotators:[16,2,1,""],run_audio_annotator:[16,2,1,""],run_subtitle_annotator:[16,2,1,""],sinput:[16,3,1,""],vinput:[16,3,1,""]},"dvt.core.FrameBatch":{bnum:[16,3,1,""],bsize:[16,3,1,""],continue_read:[16,3,1,""],end:[16,3,1,""],fnames:[16,3,1,""],get_batch:[16,2,1,""],get_frame_names:[16,2,1,""],get_frames:[16,2,1,""],img:[16,3,1,""],start:[16,3,1,""]},"dvt.pipeline":{csv:[21,0,0,"-"],viz:[22,0,0,"-"]},"dvt.pipeline.csv":{VideoCsvPipeline:[21,1,1,""]},"dvt.pipeline.csv.VideoCsvPipeline":{cut_min_length:[21,3,1,""],diff_cutoff:[21,3,1,""],dirout:[21,3,1,""],finput:[21,3,1,""],freq:[21,3,1,""],get_argparser:[21,5,1,""],path_to_audio:[21,3,1,""],path_to_faces:[21,3,1,""],path_to_subtitle:[21,3,1,""],run:[21,2,1,""]},"dvt.pipeline.viz":{VideoVizPipeline:[22,1,1,""]},"dvt.pipeline.viz.VideoVizPipeline":{cut_min_length:[22,3,1,""],diff_cutoff:[22,3,1,""],dirout:[22,3,1,""],finput:[22,3,1,""],freq:[22,3,1,""],get_argparser:[22,5,1,""],path_to_audio:[22,3,1,""],path_to_faces:[22,3,1,""],path_to_subtitle:[22,3,1,""],pipeline_level:[22,3,1,""],run:[22,2,1,""]},"dvt.utils":{pd_col_asarray:[27,4,1,""],process_output_values:[27,4,1,""],setup_tensorflow:[27,4,1,""],sub_image:[27,4,1,""]},dvt:{"abstract":[0,0,0,"-"],cli:[15,0,0,"-"],core:[16,0,0,"-"],utils:[27,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod"},terms:{"abstract":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,18,21,22,25],"break":[1,7,23,24],"class":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,18,21,22,23,25],"default":[1,2,3,4,6,8,9,10,12,13,14,15,16,17,21,22,24,27],"final":[8,9,12,16,24],"float":[3,4,7,9,12,16,27],"function":[0,2,3,4,5,8,15,19,21,22,23,25],"import":[12,16,23,25],"int":[2,3,6,7,8,9,10,11,12,13,14,16,21,22,27],"new":[0,15,16,17,27],"public":27,"return":[0,1,2,4,5,6,7,8,9,10,11,12,13,14,16,21,22,23,25,27],"short":25,"static":[21,22,23],"true":1,"while":24,Adding:24,And:[15,17,25],For:[6,8,9,10,11,12,13,14,17,25],RMS:1,The:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,20,23,24,25],Then:[1,23,24],There:23,These:[6,7,27],Use:16,Used:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],Useful:16,Uses:[2,4,5,10],Using:16,Will:[7,14],With:25,__init__:[0,25],abc:0,abl:[8,23],about:[2,4,11,16,19,21,23,27],abov:24,access:[0,8,23],account:7,across:[0,7,16,19,23,25,27],add:24,added:16,addit:[0,12,16,17,20,24,25],addition:7,advanc:19,after:[16,20],again:23,aggreg:[0,6,7,8,9,10,11,12,13,14,16,19,23,26,27],aggress:24,ahead:16,ainput:16,algorithm:[10,12,13,16,19,23,24],all:[0,7,9,12,16,23,24,25,27],allow:[2,9,15,19,24,27],along:[5,9,23],also:[4,7,8,9,12,23,24,25,27],altern:24,alwai:24,ambient:8,anaconda:20,analys:25,analysi:[12,19],analyz:19,ang_bucket:10,angl:10,ani:[3,4,7,8,12,14,19],annot:[0,1,2,3,4,5,10,15,16,17,21,22,23,24,26,27],anywher:24,apart:9,api:23,appli:[8,15,19,23],approach:17,architectur:[17,19],arg:15,argument:[21,22,25],around:9,arrai:[1,5,6,8,9,10,11,12,13,14,16,27],art:[9,19],aspect:[3,13,14],assist:7,associ:[5,16],assum:[8,15,16,17,23,24],attribu:16,attribut:[0,8,16],audio:[16,18,21,22,24],audiometa:16,automat:[8,20],avail:[16,19,23,24],averag:[7,25],avg_valu:23,avoid:27,bar:16,base:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,21,22],baselin:5,basic:16,batch:[0,1,6,7,8,9,10,11,12,13,14,16,25],been:[20,23],befor:0,being:23,between:[2,7,23],bin:7,black:16,bleed:25,block:10,blue:25,bnum:16,bool:[1,13,16],both:[7,12],bottom:[9,12,27],bound:[3,9,10,12,27],boundari:7,box:[3,9,12,27],bright:7,bsize:16,bucket:[6,10],build:[15,18,21,25,26],built:[8,9,20],calcul:1,call:[0,9,12,15,16,23,24],can:[0,4,5,8,9,12,15,16,17,19,20,21,22,23,24,27],cannot:27,cascad:9,categor:4,caus:[2,24],caution:15,chang:[4,23,24],channel:[6,8],charact:5,chunk:1,cielab:18,cielabannot:6,cli:[15,21,22],clip:[15,17,23,24,25],close:9,cnn:9,code:[8,16,19,22,23,24,25],col:25,collabor:19,collaps:16,collect:[0,1,7,16,19,23],color:[6,13],colorspac:6,colour:6,column:[5,9,16,25,27],com:[23,25],combin:24,command:[17,18,21,22,23,26],commandlin:[15,21,22],common:[0,9,12,16,24,27],compar:[5,7],comparison:7,complet:[15,17,23],compos:0,comprehens:17,comput:[1,3,4,6,7,8,10,11,13,19],concret:8,confid:[3,4,9,12],conflict:27,connect:0,consid:2,construct:[6,16,23,24,25],contact:19,contain:[0,2,4,5,6,7,8,9,10,11,12,13,15,16,17,19,21,22,27],context:7,continue_read:[0,16],control:[8,24],convolut:8,coordin:[9,27],core:[0,23,25],corpora:19,corpu:19,correspond:[0,5,8,16],count:7,cpu:27,creat:[0,3,5,14,16,22,23,24,27],creation:1,csv:21,cultur:19,current:[0,9,16,21,22,24],custom:[9,26],cut:[3,4,16,18,21,22,23,24],cut_min_length:[21,22],cut_val:[2,16,23],cutaggreg:[2,16,23],cutoff:[2,9,12,21,22,23,24],dark:[2,7],data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,24,25,26,27],dataextract:[0,16,23,25,27],datafram:[16,27],dataset:[9,16],datfram:27,debug:16,def:25,definit:24,demo:[23,24],demo_agg:25,demo_anno:25,demoaggreg:25,demoannot:25,demonstr:25,dens:[10,18],describ:[1,6,10,13,22,27],descript:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,23],design:[9,19],desir:[1,3,13,14,24],detail:[17,21,22],detect:[2,3,4,5,7,9,12,21,22,24],detector:[9,12,16],determin:[4,24,25],dextra:[16,23,25],dframe:25,dict:[0,2,3,4,5,9],dictfram:[2,3,4,5],dictionari:[0,2,3,4,5,6,7,8,9,10,11,12,13,16,23,27],dictlist:[9,12],diff:[2,7,16,23,24],diff_cutoff:[21,22],diffannot:[7,16,23],differ:[2,9,16,18,21,22,23,24],digit:[0,16,19],dimens:[8,10,13,27],dimension:[8,9,12,16,27],dinput:5,direct:12,directli:15,directori:[1,5,15,16,17,21,22,24],dirout:[21,22,24],discoveri:19,displai:[15,16,17,18],displayaggreg:3,distanc:[4,5],distant:[0,16,17,20,23,25],distinct:9,distribut:[6,20],divid:[8,10],divis:6,document:23,doe:[14,24],doing:9,domin:6,done:23,down:7,download:[23,25],draw:3,dure:2,dvt:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,22,23,24,25,27],each:[1,4,5,6,7,9,10,12,16,23],easi:8,edg:25,edu:19,effect:14,either:27,emb:[9,12,18],embed:[5,6,8,9,10,11,12,13,27],embedannot:8,embedframekera:8,embedframekerasresnet50:8,empti:[1,14],end:16,endow:19,entir:[3,4,16,23],entri:[2,4,5],equal:16,era:19,estim:[2,4],everi:[6,8,9,10,11,12,13,14,24],evok:15,exampl:[6,8,9,10,11,12,13,14,15,16,17,19,23,24,25],exclude_kei:16,exclude_set:16,execut:24,exist:14,expand:27,explain:[17,24],explicitli:24,extend:[8,25],extern:15,extra:24,extract:[0,6,10,11,13,14,15,16,17,18,19,24,25,26,27],face:[3,4,5,12,18,21,22,24],face_nam:5,faceannot:9,facedetectmtcnn:9,faceembedvgg2:9,facilit:19,fade:2,fail:24,fals:[0,1,13],familiar:23,farneback:[10,13],farther:9,fct:27,featur:10,feed:0,few:[21,22],fewer:[21,22,24],field:13,file:[0,1,3,5,13,14,15,16,17,21,22,23,24,25],film:24,find:[7,11,19,23],fingerprint:5,finish:[15,17],finput:[21,22],first:[7,8,9,16,23],flag:0,flow:[18,24],fname:[16,25],follow:[15,16,17,19,20,23,24,25],forgo:24,format:[0,5,8],forward:[0,9],four:[8,16],fprint:5,frame:[0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,21,22,23,24,25,27],frame_end:[16,23],frame_start:[16,23],frameannot:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,16,25],framebatch:[0,6,7,8,9,10,11,12,13,14,16],frameinput:[16,23,25],frameprocessor:14,freq:[6,8,9,10,11,12,13,14,21,22],frequenc:[1,6,8,9,10,11,12,13,14,21,22,24],frequent:8,from:[0,1,2,3,4,5,7,14,15,16,17,19,21,22,23,24,25,27],further:[0,17,19,23,25],gener:[1,8,9,12,23],get:[16,25],get_argpars:[21,22],get_batch:[16,25],get_data:[16,23,25],get_fram:16,get_frame_nam:[16,25],get_json:16,get_metadata:0,github:[19,23,25],give:[1,2,4,5,6,7,8,17,21,22,25],given:[1,3,4,5,7,8,13,14,16,27],gpu:27,grab:[11,16],grant:19,green:25,group:1,gunnar:[10,13],h40:23,half:16,hand:19,handl:8,has:[13,20,23],have:[0,15,16,17,19,20,24,27],head:[23,25],height:[3,11,13,14,16],held:23,help:15,here:[2,3,4,5,7,11,17,23,24],high:[9,11,24],higher:[8,19,21,22,24],histogram:[6,7,18],hofm:10,hofmannot:10,homepag:19,how:[1,6,7,8,9,10,11,12,13,14,17,22,23,24,25],howev:25,hsv:7,http:[15,17,23,25],hue:7,human:19,ident:5,identifi:[5,9],ignor:[2,6,8,9,10,11,12,13,14,16,27],ignore_v:2,imag:[0,3,5,6,7,9,10,12,13,14,16,18,19,21,22,23,24,25,27],imageinput:11,img:[8,9,11,12,16,25,27],imgannot:11,implement:[0,7,11,16,25],includ:[3,4,7,9,12,16,23,24],increas:[1,3,4],indic:[2,16],individu:[9,14,16],inform:[0,2,4,5,12,14,15,16,17,19,23],initi:0,input:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,23,24,27],input_path:[16,23,25],insert:12,insid:24,instal:[17,19,23,24],instanc:16,instead:27,instruct:19,integ:[6,7,8,9,10,11,12,13,14,21,22,24],intend:15,intens:25,interact:[18,21],interest:[19,25],interfac:[16,17,18,19,21,22,23,24],interg:22,intern:[8,16,23],introduc:24,issu:[19,23],item:[0,9,12],iter:[0,16],its:[14,23],json:[16,24],just:[16,22,24],keep:[3,13,14,17,27],kei:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,23,27],kera:[8,27],kind:[7,23],known:[4,24],kwarg:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,25],lab:19,larg:19,last:24,latter:13,layer:8,ldframe:[0,1,2,3,4,5,25],lead:27,learn:8,left:[9,12,19,27],len:10,length:[2,3,6,10,16,17,18,21,22,24,27],level:[2,4,5,11,17,19,23,24],librari:27,light:6,like:24,line:[17,18,21,22,23,26],link:19,list:[1,3,4,5,6,7,8,9,10,11,12,13,14,16,23,27],load:25,local:[2,3,14,15,17,23,24],locat:[1,9,12,13,14,16],log:[15,17],longer:24,longest:[3,4],look:[16,23],loud:1,low:19,lower:[17,23,24],ltilton:19,machin:[14,24],maco:27,made:[0,16],mag_bucket:10,magnitud:10,mai:[15,17,24,27],make:[1,7,23,24],make_fprint_from_imag:5,mani:[0,7,10,16,23,24,25],manipul:24,master:[23,25],match:[5,8],materi:[0,1,15,16,17,23],max_batch:16,max_person_dist:4,maximum:[4,6,16],mean:25,measur:[1,23],media:[15,21,22],median:7,memori:27,messag:[15,16],meta:[4,16],metadata:[0,11,15,16,17,18,19,22,23,24],method:[0,9,12,14,16,23,27],metric:8,might:25,min:24,min_face_scor:[3,4],min_len:2,min_obj_scor:[3,4],mind:17,minim:[8,15,23,24],minimum:[2,3,4,21,22,24],minut:[15,17],model:[8,9],modifi:24,modul:[1,8,9,12,14],more:[15,16,17,19,21,22,23,24,27],most:[6,8,9,24,27],motion:[10,13],move:[0,12,19],mp4:[15,16,17,23,24,25],msg:16,much:[7,22,23,24,27],multi:9,multidimension:27,must:[0,2,4,5,23],name:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,21,22,24,25,27],nation:19,nativ:27,ndarrai:27,nearest:5,need:[0,2,5,16,23,24,25],network:[8,19],neural:8,next:[7,16],next_batch:0,non:9,none:[1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,21,22,27],normal:7,note:[0,5,8,24],notic:23,novel:25,now:23,num_bucket:6,num_domin:6,number:[1,5,6,8,16],numer:1,numpi:[5,6,8,9,10,11,12,13,14,27],obj:[4,12],object:[0,1,3,4,8,9,18,21,22,23,25,27],objectannot:12,objectdetectretinanet:12,obtain:16,occur:[2,23,24,27],off:[3,4,24],offer:[21,22],often:[6,8,9,10,11,12,13,14,17,24],onc:[0,15,17,23],one:[0,4,5,7,8,9,12,15,16,24,25,27],onli:[7,9,13,14,16,23,24,27],open:[15,17,19],open_input:0,opencv:[10,13],oper:23,oprah:24,optic:[18,24],opticalflow:13,opticalflowannot:13,option:[1,3,4,6,8,9,10,11,12,13,14,16,17,21,22,23,26,27],optionali:1,order:[0,16,17,23,24,25,27],ordereddict:16,orient:10,origin:[0,3,4,27],other:[6,8,9,10,11,12,13,14,16,17,24],otherwis:[1,3,4],our:25,out:24,outlay:8,output:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,23,24,25,27],output_dir:[1,13,14],output_shap:27,over:[1,3,8,16,21,22,23],overal:7,overlai:3,own:[0,16,17,23],packag:[19,20,25],pad:16,page:19,panda:[16,23,27],paradigm:9,paramet:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,16,23,27],pars:22,parser:[21,22],particular:16,particularli:[9,11],pase:0,pass:[0,5,9,16,23,24,25,27],path:[16,21,22,24],path_or_buf:16,path_to_audio:[21,22],path_to_fac:[21,22],path_to_subtitl:[21,22],pattern:19,pd_col_asarrai:27,pdf:27,penultim:8,peopl:[4,9,18],peopleaggreg:5,per:[1,4,5,8,16,24],percentag:27,percentil:7,perform:[6,8,9,10,11,12,13],person:[4,5,9,24],phantom:0,pip:20,pipelin:[0,15,17,24,26,27],pipeline_level:22,pixel:[7,16,25,27],place:24,pleas:[17,19],plot:1,png:[1,3,18,24],pngannot:14,point:1,popular:8,posit:[21,22,24],possibl:[1,8,23,24,27],potenti:24,power:1,powertoneaggreg:1,pre:[8,15,25],predefin:[5,22],predict:[5,8],preprocess:8,preprocess_input:8,preserv:[3,13,14],primari:16,print:15,print_help:15,problem:27,process:[0,6,8,9,10,11,12,13,14,16,17,22,24],process_output_valu:[0,27],processor:0,produc:[0,1,8,13,21,22,23,24,27],program:15,progress:[15,16,17],project:[9,19],proport:[3,4],protyp:[21,22],provid:[0,1,4,5,7,8,12,16,17,23,24,25],purpos:2,put:7,pypi:[19,20],python3:[15,17,24],python:[19,20,21,22,23,25],q40:[16,23],quantil:[7,16,23],question:19,quick:[17,23],quickli:[15,19],quit:24,rate:1,rather:[21,22],ratio:[3,13,14],raw:[13,23,25],read:16,reader:23,readi:[0,16],reason:24,recent:24,recognit:24,reconstruct:27,red:25,refer:1,rel:23,relev:16,repeat:17,repect:3,repositori:19,repres:[9,10,12],represent:[10,13],request:7,requir:[3,8,9,16,20,24,25],resiz:[8,27],resnet50:8,resnet:8,resolut:27,restart:0,result:[0,7,9,10,16,24],retinanet:12,rgb:[8,16],rich:24,richmond:19,right:[9,12,27],rough:1,row:[4,5,8,9,25],run:[0,1,3,8,9,15,16,17,19,20,21,22,23,24,25,27],run_aggreg:[16,23,25],run_annot:[16,23,25],run_audio_annot:16,run_cli:15,run_subtitle_annot:16,safe:27,same:[3,4,9,13,17,27],sampl:[1,7,21,22],satur:7,save:[3,14],scalar:27,scale:[3,13,14,27],scene:7,score:[3,4,9,12,24],script:24,search:19,second:[1,7,9],see:[8,16,17,19,21,22,23,25],select:[21,22],self:25,semant:19,serv:16,server:[15,17],set:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,21,22,23,24,27],setup:27,setup_tensorflow:27,sever:[0,15,17,25,27],shape:[6,8],shot:[3,4,5,7,23],shot_nam:[3,4],shot_siz:[3,4],shotlengthaggreg:4,should:[0,1,3,4,5,6,8,9,10,11,12,13,14,15,16,17,20,27],show:[1,2,3,7,15,16,17,23,24],shown:[16,23],side:[7,14,19],silenc:27,similar:[8,21,22],simpl:11,simpli:[23,24,25],singl:[9,12,23,27],sinput:16,sitcom:19,size:[3,4,7,8,13,14,16,27],slightli:24,small:[7,9],solv:[0,16],some:[8,14,15,17,23,24],someth:[6,8,9,10,11,12,13,14],somewher:3,sound:[1,16],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,22,24,25,27],space:[7,8,9,16,27],spatial:[10,13],specif:[9,12,16,25],specifi:[14,24],spectrogram:1,spectrogramaggreg:1,spectrum:1,squar:7,src:[21,22],srt:[16,24],standard:27,start:[3,4,15,16,17],state:[9,19],step:[9,23],sterotyp:5,still:[0,12,14,19,24],store:[0,1,9,12,13,16,27],str:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,21,22,27],straightforward:[16,23,25],string:[13,16],structur:[16,21],style:19,sub_imag:27,subclass:[0,16],subimag:27,subsequ:[7,10,13,23],subset:[0,8,27],subtitl:[16,21,22,24],success:2,suggest:20,suitabl:9,summari:7,supervis:8,suppli:[9,12,14],support:[19,24],suppress:1,supress:16,take:[0,2,3,4,5,7,9,12,15,17,24,25,27],tarnold2:19,task:[0,8,9,12,16],techniqu:25,televis:24,tensorflow:27,termin:[15,17,24],test:[9,16,20,23,25],than:[6,8,9,10,11,12,13,14,21,22,27],thei:[0,16,24],them:[9,24],themselv:9,theori:19,thi:[0,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,23,24,25,27],think:25,though:17,three:[6,8,9,12,24,25,27],through:[0,9,16,20],tied:[16,23],tightest:[3,4],time:[1,16,17],titl:24,togeth:9,tone:1,too:[2,27],tool:[15,24],toolkit:[0,15,16,17,20,23,24,25,27],top:[9,12,27],track:[1,24],train:8,translat:1,tri:5,troubl:19,trough:19,tune:8,tupl:[5,6,27],tutori:[17,21,22,23,24,25],twice:16,two:[1,7,9,10,13,16,19],type:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,21,22],typic:2,understand:23,unless:16,unreli:24,until:0,usag:[15,16],use:[1,3,4,8,16,17,23,24],used:[0,2,4,5,7,8,13,16,21,22,23,27],useful:[7,8,11,14,15,23,24,25,27],user:[0,15,16,19,23,24,25,27],uses:2,using:[4,8,9,10,11,12,13,17,19,20,23,24,27],usual:23,util:[0,18],valid:16,valu:[1,2,7,9,12,16,21,22,23,24,27],vari:1,variabl:2,vector:[5,8,9],verbos:27,veri:8,vertic:[3,4],vggface2:9,video:[0,2,6,7,8,9,10,12,13,15,16,17,19,21,22,23,24,25],videocsvpipelin:21,videovizpipelin:22,view:[0,15,16,17,20,23,25],vinput:16,vision:19,visual:[0,1,16,17,18,19,23,24],visualinput:[0,16],viz:[15,17,22,24],wai:[23,24],want:24,warn:27,wav:[16,21,22,24],wave:1,websit:[21,22,24],well:[9,24],what:[3,13,14,24],when:[0,1,8,9,11,16,24],where:[1,2,9,12,14,16,23],whether:[16,24],which:[2,4,5,9,10,12,24,27],who:16,width:[3,11,13,14,16],winfrei:24,within:[5,21,22,23],word:8,work:[16,17,21,22,24],would:24,wrapper:12,yet:14,yield:16,you:[4,5,15,16,17,19,20,24],your:[5,15,17,23,24],zero:[3,4,9,12,16]},titles:["Abstract Classes","Audio Aggregators","Cut Aggregators","Display Aggregators","Length Aggregators","People Aggregators","CieLAB Annotators","Frame Difference Annotations","Embed Image Annotations","Face Annotations","Histograms of Optical Flow","Image Annotations","Object Annotations","Dense Optical Flow Annotations","Png Annotations","Command Line Interface","Core Objects","Minimal Demo","Distant Viewing Toolkit (DVT): API Docs","The Distant Viewing Toolkit (DVT)","Installation","Pipeline for Extracting Metadata","Pipeline for Building Interactive Visualizations","Building a data extraction pipeline","Command Line Options","Custom Annotators and Aggregators","Tutorials","Utility Functions"],titleterms:{"abstract":0,"class":0,"function":[18,27],The:19,aggreg:[1,2,3,4,5,18,25],annot:[6,7,8,9,11,12,13,14,18,25],api:18,audio:1,build:[22,23],cielab:6,command:[15,24],core:[16,18],custom:25,cut:2,data:23,demo:17,dens:13,differ:7,displai:3,distant:[18,19],doc:18,dvt:[18,19],emb:8,extract:[21,23],face:9,flow:[10,13],frame:7,histogram:10,imag:[8,11],instal:20,interact:22,interfac:15,length:4,line:[15,24],metadata:21,minim:17,object:[12,16],optic:[10,13],option:24,peopl:5,pipelin:[18,21,22,23],png:14,toolkit:[18,19],tutori:26,util:27,view:[18,19],visual:22}})