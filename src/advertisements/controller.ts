import Advertisements from './entity'
import { JsonController, Get, Param, Post, HttpCode, Body } from 'routing-controllers';


@JsonController()
export default class AdvertisementsController{

    @Get('/advertisements')
    allAdvertisments() {
        const adverts = Advertisements.find()
        return { adverts }
    }

    @Get('/advertisements/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Advertisements.findOne(id)
    }

    @Post('/advertisements')
        @HttpCode(201)
        createAdvertisment(
            @Body() advert: Advertisements
        ) {
            return advert.save()
        }

    // @Delete('/advertisements/:id')
    //     @HttpCode(202)
    //     destroyAdvertisment(
    //         @Param('id') id: number
    //     ) {
    //         return 
    //     }



}



