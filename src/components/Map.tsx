import React, { useEffect, useRef, useState }  from 'react'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import useLocation from '../hooks/useLocation'
import LoadingScreen from '../screen/LoadingScreen'
import Fab from './Fab'


const Map = () => {

    const [showPolyline,setShowPolyline] = useState(true)

    const {
        hasLocation,
        initialPosition,
        userLocation,
        routeLines,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation
    } = useLocation()

    useEffect(() => {
        followUserLocation()
        return () => { 
            stopFollowUserLocation() 
        }
    }, [])

    useEffect(()=>{
        if(!following.current) return
        mapViewRef.current?.animateCamera({
            center:{ 
                latitude:userLocation.latitude, 
                longitude:userLocation.longitude
            }
        })
    },[userLocation])
    

    const mapViewRef =  useRef<MapView>()
    const following = useRef<boolean>(true)

    const centerPostion = async () =>{

        const {longitude,latitude} = await getCurrentLocation()
        following.current = true
        mapViewRef.current?.animateCamera({
            center:{ latitude, longitude}
        })
    }

    if(!hasLocation){
        <LoadingScreen/>
    }

    return (
        <>
            <MapView
            ref={ el => mapViewRef.current = el!}
                showsUserLocation
                // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{flex:1}}
                region={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onTouchStart={()=>following.current=false}
            >
                {/* <Marker 
                    image={require('../assets/custom-marker.png')} 
                    coordinate={{
                        latitude:37.78825,
                        longitude:-122.4324
                    }}
                    title="Marcador"
                    description="una description"
                /> */}
                {
                    showPolyline && <Polyline
                    coordinates={routeLines}
                    strokeColor="black"
                    strokeWidth={3}
                />
                }
                
            </MapView>
            <Fab 
                iconName={'compass-outline'} 
                onPress={centerPostion}
                style={{
                    position:'absolute',
                    bottom:15,
                    right:15
                }}
            />

            <Fab 
                iconName={'brush-outline'} 
                onPress={()=> setShowPolyline(value=>!value)}
                style={{
                    position:'absolute',
                    bottom:80,
                    right:15
                }}
            />
        </>
    )
}

export default Map