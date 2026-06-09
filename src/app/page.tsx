// app/page.tsx
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  Zap,
  Shield,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  X,
  MapPin,
  MessageCircle,
  Briefcase,
  Heart,
  Activity,
  Calendar,
  Bell,
  Lock,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="BUM Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-xl text-gray-900">BUM</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Características
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cómo funciona
              </a>
              <a
                href="#team"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Equipo BUM
              </a>
              <a
                href="#for-business"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Para empresas
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contacto
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6">
              Únete gratis
            </Button>
          </div>
        </div>
      </header>

      <section
        id="inicio"
        className="pt-20 pb-20 px-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 border-none mb-4 px-4 py-1">
                ✨ Únete y conecta
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Conecta con personas que comparten tus{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  pasiones
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                BUM es la red social que conecta a personas con intereses
                afines. Encuentra eventos, forma comunidades y descubre
                actividades cerca de ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8"
                >
                  Comenzar ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-gray-300"
                >
                  Ver demo
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-6 ">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-0.5"
                      >
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src={`/cara${i}.jpg`}
                            alt={`Usuario ${i}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">+1000</span> usuarios
                    activos
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center flex-col">
              <div className="relative group w-[550px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>

                  <img
                    src="/imgPersonas.jpg"
                    alt="Jóvenes conectando en evento BUM"
                    className="w-full h-auto object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>

                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-purple-500 rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-pink-500 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-pink-500 rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-purple-500 rounded-br-xl"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br w-[550px] from-purple-100 to-pink-100 rounded-3xl">
                <div className="bg-white rounded-2xl shadow-xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src="/cara2.jpg"
                          alt="Usuario"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Ana García</div>
                      <div className="text-sm text-gray-500">
                        📍 A 2km de ti
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Badge className="bg-purple-100 text-purple-700">
                      🎨 Arte
                    </Badge>
                    <Badge className="bg-pink-100 text-pink-700">
                      📸 Fotografía
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700">
                      🍳 Cocina
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    🎉 Evento este fin de semana: Taller de acuarela
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              Características
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para conectar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              BUM te ofrece herramientas potentes para encontrar personas y
              actividades que realmente te interesan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-purple-600" />,
                title: "Matching inteligente",
                description:
                  "Nuestro algoritmo te conecta con personas que comparten tus mismos intereses y pasiones.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-pink-600" />,
                title: "Mapa de actividades",
                description:
                  "Descubre eventos y actividades cerca de tu ubicación en tiempo real.",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
                title: "Comunidad activa",
                description:
                  "Participa en foros, chats grupales y comparte tus experiencias.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-pink-600" />,
                title: "Gestión de eventos",
                description:
                  "Crea y organiza tus propios eventos para conectar con otros entusiastas.",
              },
              {
                icon: <Bell className="w-8 h-8 text-purple-600" />,
                title: "Notificaciones en tiempo real",
                description:
                  "Recibe alertas de nuevos eventos, mensajes y conexiones.",
              },
              {
                icon: <Lock className="w-8 h-8 text-pink-600" />,
                title: "Seguridad y privacidad",
                description:
                  "Tus datos están protegidos con cifrado avanzado y control total de privacidad.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              Cómo funciona
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empieza en 3 pasos simples
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Regístrate",
                description:
                  "Crea tu cuenta en segundos con email o redes sociales",
              },
              {
                step: "2",
                title: "Configura tus intereses",
                description: "Selecciona tus hobbies y pasiones favoritos",
              },
              {
                step: "3",
                title: "Conecta y disfruta",
                description: "Descubre personas y eventos hechos para ti",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="py-20 px-4 bg-gradient-to-b from-white to-purple-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none mb-4 px-4 py-1">
              💜 El equipo
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conoce al{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Equipo BUM
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos un grupo de estudiantes apasionados por conectar personas a
              través de sus intereses
            </p>
          </div>

          {/* Grid de integrantes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Integrante 1 - Jhon Calderón */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src="/integrante1.png"
                        alt="Jhon Calderón"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Jhon Calderón
                  </h3>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </div>
            </div>

            {/* Integrante 2 - Tamara Guzmán */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src="/integrante2.png"
                        alt="Tamara Guzmán"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Tamara Guzmán
                  </h3>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </div>
            </div>

            {/* Integrante 3 - Marcoandres Herrera */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src="/integrante3.png"
                        alt="Marcoandres Herrera"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center p-2 px-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Marcoandres Herrera
                  </h3>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </div>
            </div>

            {/* Integrante 4 - Víctor Pineda */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src="/integrante4.png"
                        alt="Víctor Pineda"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Víctor Pineda
                  </h3>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </div>
            </div>

            {/* Integrante 5 - Sebastián Ruiz */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src="/integrante5.png"
                        alt="Sebastián Ruiz"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Sebastián Ruiz
                  </h3>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </div>
            </div>
          </div>

          {/* Frase motivacional del equipo */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
            <p className="text-lg text-gray-700 italic">
              Creemos que las mejores conexiones nacen de intereses compartidos.
              Por eso creamos BUM, para que nunca más estés solo en tus
              pasiones.
            </p>
            <p className="text-purple-600 font-semibold mt-2">
              — Equipo BUM 2026
            </p>
          </div>
        </div>
      </section>

      {/* For Business Section */}
      <section
        id="for-business"
        className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-900 text-white"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-none mb-4">
                Para empresas
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Conecta con tu audiencia ideal
              </h2>
              <p className="text-lg text-purple-100 mb-6">
                BUM te permite llegar a usuarios realmente interesados en tus
                productos o servicios. Publica eventos, promociona tus
                actividades y mide el impacto de tus campañas.
              </p>
              <ul className="space-y-3">
                {[
                  "Segmentación precisa por intereses y ubicación",
                  "Panel de métricas y análisis en tiempo real",
                  "Publicación de eventos y promociones",
                  "Conexión directa con tu público objetivo",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8">
                Crear cuenta empresarial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold">+20 eventos/mes</div>
                <div className="text-purple-200">publicados por empresas</div>
              </div>
              <div className="space-y-4">
                {[
                  { company: "Studio Yoga", reach: "+150%", type: "Bienestar" },
                  { company: "Arte & Café", reach: "+89%", type: "Arte" },
                  { company: "Chef en Casa", reach: "+200%", type: "Cocina" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold">{item.company}</div>
                      <div className="text-sm text-purple-200">{item.type}</div>
                    </div>
                    <div className="text-green-400 font-semibold">
                      {item.reach}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              Testimonios
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros usuarios
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Méndez",
                role: "Usuario frecuente",
                text: "Gracias a BUM encontré un grupo de senderismo increíble. Ahora cada fin de semana tengo planes con personas que comparten mi pasión por la naturaleza.",
              },
              {
                name: "Laura Fernández",
                role: "Empresaria",
                text: "Como dueña de un estudio de yoga, BUM me ha permitido llegar a personas realmente interesadas. Mis eventos tienen lleno total cada semana.",
              },
              {
                name: "Diego Ramírez",
                role: "Creador de contenido",
                text: "La comunidad es muy activa y las recomendaciones son súper acertadas. He conocido gente maravillosa gracias al matching inteligente.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "+1000", label: "Usuarios activos" },
              { number: "+50", label: "Eventos semanales" },
              { number: "+20", label: "Empresas asociadas" },
              { number: "4.8", label: "Calificación promedio" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-purple-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              Contacto
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Tienes preguntas? Escríbenos
            </h2>
            <p className="text-xl text-gray-600" />
          </div>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-6">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Únete a la comunidad BUM</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Miles de personas ya están conectando a través de sus pasiones. ¿Qué
            esperas?
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8"
          >
            Registrarme ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-2">
                  <img
                    src="/logo.png" // Cambia la extensión según tu archivo (.svg, .webp, etc.)
                    alt="BUM Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <span className="font-bold text-xl text-white">BUM</span>
                </div>
              </div>
              <p className="text-sm">Únete y conecta con personas como tú</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Para empresas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 BUM. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
