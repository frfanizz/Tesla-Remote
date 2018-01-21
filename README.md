# SpartanHacksCarControl

This is an application which utilizes Intrepid Control System's NeoOBD2 Pro (and a corresponding API) to demonstrate the control possibilities of such a device. This application is a remote control for the doors (trunk and frunk included) and windows of a Tesla Model X. By selecting a desired door or trunk or frunk, you can open, and then close that door. You can also open all windows on a hot day before stepping into your car. This application has plenty of room for advancement (pending new API function) and can be applied to any reasonably moren car.

![Initial UI](https://github.com/frfanizz/SpartanHacksCarControl/blob/master/Screen%20Shot%20-%20basic.png)
![UI with active elements](https://github.com/frfanizz/SpartanHacksCarControl/blob/master/Screen%20Shot%20-%20with%20active%20elements.png)

## Getting Started / Installing

To test this application, you would need a NeoOBD2 Pro, and reasonable knowledge regarding its installation. After installing, you need a Private Key and Public Key, which should be replaced in the code for functionality.

Alternatively, to just experience the UI, you can download this repository, and, within the file.js file, comment out the existing post request function (lines 148-172) and uncomment the dummy function which follows (the dummy function will always return a successful POST response). From here, open index.html on a web browser of your choice, and click on the doors you wish to open/close, as well as the windows.

Obviously, this application was limited to the API provided, so there are no GET API calls to check the statuses of any particular door or window, so the application is under the assumption that the starting condition is all doors and windows are closed.

## Built With

* [Intrepid Control System's NeoOBD2 Pro API](http://hackathon.intrepidcs.com/docs) - The API mentioned

* [Gimp](https://www.gimp.org/) - For all that fancy UX work

* [This image from Kelly Blue Book](https://www.kbb.com/car-pictures/2016-tesla-model-x-suv-pictures/) - Which the UX is entirely based on

## Contributing

Feel free to contribute! Branch, fork, whatever!

## Authors

* **Francesco Fanizza** - *Initial Work done at SpartanHacks4* - Jan 20, 2018

Everyone from Intrepid Control Systems who prepared the API and lended a hand

## Acknowlegments

* Intrepid Control Systems
* SpartanHacks, and Michigan State University
* Everyone from SpartanHacks and Intrepid who helped out
