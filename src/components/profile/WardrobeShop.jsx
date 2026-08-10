import React, { useState } from 'react';
import { avatarShopCatalog, levelEvolutions } from '../../data/avatarShop';
import { AvatarCharacter } from '../avatar/AvatarCharacter';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { useGame } from '../../context/GameContext';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { Check, Lock, Sparkles, Gem, ShoppingBag } from 'lucide-react';

export const WardrobeShop = () => {
  const { gameState, equipAvatarItem, setGems, setTheme } = useGame();
  const [activeTab, setActiveTab] = useState('hats');
  const [unlockNotification, setUnlockNotification] = useState(null);

  const currentEvolution = levelEvolutions.find(
    e => gameState.level >= e.minLevel && gameState.level <= e.maxLevel
  ) || levelEvolutions[0];

  const handleEquipOrBuy = (category, item) => {
    // If already unlocked/owned or cost is 0
    if (item.cost === 0 || gameState.gems >= item.cost) {
      if (item.cost > 0) {
        setGems(gameState.gems - item.cost);
      }

      if (category === 'themes') {
        setTheme(item.id);
      } else {
        const catKey = category === 'hats' ? 'hat' : category === 'glasses' ? 'glasses' : category === 'outfits' ? 'outfit' : 'pet';
        equipAvatarItem(catKey, item.id);
      }

      soundFx.playCorrect();
      triggerConfetti('levelUp');
      setUnlockNotification(`🎉 Equipped ${item.name}! You look awesome!`);
      setTimeout(() => setUnlockNotification(null), 3000);
    } else {
      soundFx.playIncorrect();
      setUnlockNotification(`⚠️ You need ${item.cost} Gems to unlock this! Keep solving quizzes!`);
      setTimeout(() => setUnlockNotification(null), 3000);
    }
  };

  const tabs = [
    { id: 'hats', label: 'Hats 🧢' },
    { id: 'glasses', label: 'Glasses 👓' },
    { id: 'outfits', label: 'Outfits 👕' },
    { id: 'pets', label: 'Pets 🐾' },
    { id: 'themes', label: 'Themes 🎨' }
  ];

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header Level Evolution Status */}
      <div style={{
        padding: '20px', borderRadius: 'var(--radius-md)',
        background: `linear-gradient(135deg, ${currentEvolution.color} 0%, #1cb0f6 100%)`,
        color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <AvatarCharacter avatarState={gameState.equippedAvatar} size={64} animate={false} />
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0.25)', padding: '2px 10px', borderRadius: 'var(--radius-full)' }}>
              Level {gameState.level} Avatar Evolution
            </span>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800', marginTop: '4px' }}>
              {currentEvolution.title}
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.2)', padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
          <Gem size={20} color="var(--secondary)" /> {gameState.gems} Gems
        </div>
      </div>

      {/* Unlock Notification Toast */}
      {unlockNotification && (
        <div className="animate-pop" style={{ padding: '12px 16px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: '800', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          {unlockNotification}
        </div>
      )}

      {/* Wardrobe Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => { setActiveTab(t.id); soundFx.playClick(); }}
            style={{
              padding: '10px 18px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: activeTab === t.id ? 'var(--primary)' : 'var(--bg-main)',
              color: activeTab === t.id ? '#fff' : 'var(--text-muted)',
              fontWeight: '700', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
        {avatarShopCatalog[activeTab].map(item => {
          const currentEquipped =
            activeTab === 'hats' ? gameState.equippedAvatar.hat === item.id :
            activeTab === 'glasses' ? gameState.equippedAvatar.glasses === item.id :
            activeTab === 'outfits' ? gameState.equippedAvatar.outfit === item.id :
            activeTab === 'pets' ? gameState.equippedAvatar.pet === item.id :
            gameState.theme === item.id;

          return (
            <div
              key={item.id}
              style={{
                padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)',
                border: currentEquipped ? '2px solid var(--primary)' : '1.5px solid var(--border-light)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2.5rem' }}>{item.icon || '🎨'}</div>
              
              <div style={{ fontWeight: '700', fontSize: '0.95rem', fontFamily: 'var(--font-rounded)' }}>
                {item.name}
              </div>

              {currentEquipped ? (
                <BadgeChip label="Equipped ✓" color="var(--primary)" bg="var(--primary-light)" size="sm" />
              ) : (
                <Button3D
                  variant={item.cost === 0 ? 'secondary' : 'warning'}
                  size="sm"
                  onClick={() => handleEquipOrBuy(activeTab, item)}
                  style={{ width: '100%' }}
                >
                  {item.cost === 0 ? 'Equip' : `Unlock (${item.cost} Gems)`}
                </Button3D>
              )}
            </div>
          );
        })}
      </div>
    </CardRounded>
  );
};
